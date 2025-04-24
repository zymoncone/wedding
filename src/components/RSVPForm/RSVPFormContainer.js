import './RSVPForm.css';
import { useState, useEffect } from 'react';
import { readDynamoDB, queryDynamoDB, sanitizeInput, normalizeName } from '../../assets/helper_functions';
import NameVerificationPage from './NameVerificationPage';
import RSVPForm from './RSVPForm';
import { rsvp_thank_you_top, rsvp_thank_you_bottom, rsvp_title } from '../../assets/texts';
import { useAppContext } from "../SubRoot/SubRoot";

const RSVPFormContainer = () => {
  const [name, setName] = useState('');
  const [guestMatch, setGuestMatch] = useState(false);
  const [partyID, setPartyID] = useState('none');
  const [partyData, setPartyData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const { togglableLang } = useAppContext();


  const handleName = () => {
    const sanitizedValue = sanitizeInput(name);
    setName(sanitizedValue);
    return sanitizedValue;
  };

  const handleContinue = (e) => {
    e.preventDefault();

    const santizedAndNormalizedName = normalizeName(handleName());
    if (process.env.REACT_APP_NODE_ENV === 'development') {
      console.log('santizedAndNormalizedName:', santizedAndNormalizedName);
    }

    setLoading(true);
    setErrorMessage(false);

    readDynamoDB(santizedAndNormalizedName)
      .then(response => {
        if (response) {
          setGuestMatch(true);
          setPartyID(response['party-id']);
          if (process.env.REACT_APP_NODE_ENV === 'development') {
            console.log('READ response', response);
          }
        } else {
          setGuestMatch(false);
          setErrorMessage(true);
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!guestMatch && submit) {
      setGuestMatch(false);
      setPartyID('none');
      setName('');
      setErrorMessage(false);
    }
  }, [guestMatch, submit]);

  useEffect(() => {
    if (guestMatch) {
      queryDynamoDB(partyID)
        .then(response => {
          if (response) {
            if (process.env.REACT_APP_NODE_ENV === 'development') {
              console.log('QUERY response', response);
            }
            setPartyData(response);
          } else {
            console.log('Item does not exist');
          }
        });
    }
  }, [guestMatch, partyID]);

  return (
    <div className="rsvp-form-container">
      <h1 className="rsvp-title">{rsvp_title[togglableLang]}</h1>
      {guestMatch &&
        <RSVPForm partyData={partyData}
          setGuestMatch={setGuestMatch}
          submit={submit}
          setSubmit={setSubmit}
          lang={togglableLang}
        />}
      {!guestMatch && !submit &&
        <NameVerificationPage handleContinue={handleContinue}
          name={name}
          setName={setName}
          errorMessage={errorMessage}
          loading={loading}
          lang={togglableLang} />
      }
      {!guestMatch && submit &&
        <div className="thank-you-text">
          <div>{rsvp_thank_you_top[togglableLang]}</div>
          <div>{rsvp_thank_you_bottom[togglableLang]}</div>
        </div>
      }
    </div>
  );
}

export default RSVPFormContainer;