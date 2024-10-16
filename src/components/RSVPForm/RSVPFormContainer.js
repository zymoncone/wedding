import './RSVPForm.css';
import { useState, useEffect } from 'react';
import { readDynamoDB, queryDynamoDB } from '../../assets/helper_functions';
import NameVerificationPage from './NameVerificationPage';
import RSVPForm from './RSVPForm';

const RSVPFormContainer = () => {
  const [name, setName] = useState('');
  const [guestMatch, setGuestMatch] = useState(false);
  const [partyID, setPartyID] = useState('none');
  const [partyData, setPartyData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [confirmedRSVP, setConfirmedRSVP] = useState(0);

  useEffect(() => {
    console.log('confirmedRSVP:', confirmedRSVP);
  }, [confirmedRSVP]);

  const handleContinue = (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage(false);

    readDynamoDB(name)
      .then(response => {
      if (response) {
        setGuestMatch(true);
        setPartyID(response['party-id']);
      } else {
        console.log('Item does not exist');
        setGuestMatch(false);
        setErrorMessage(true);
      }
      setLoading(false);
    });
  };

  const goBack = (e) => {
    e.preventDefault();
    setGuestMatch(false);
    setPartyID('none');
    setSubmit(false);
    setName('');
    setErrorMessage(false);
  }

  useEffect(() => {
    if (guestMatch) {
      queryDynamoDB(partyID)
        .then(response => {
        if (response) {
          console.log('query', response);
          setPartyData(response);
        } else {
          console.log('Item does not exist');
        }
      });
    }
  } , [guestMatch, partyID]);

  return (
    <div className="rsvp-form-container">
      <h1>RSVP</h1>
      {guestMatch &&
        <RSVPForm partyData={partyData} 
                  setGuestMatch={setGuestMatch} 
                  submit={submit}
                  setSubmit={setSubmit}
                  confirmedRSVP={confirmedRSVP}
                  setConfirmedRSVP={setConfirmedRSVP}
                  /> }
        {!guestMatch && !submit &&
        <NameVerificationPage handleContinue={handleContinue} 
                              name={name} 
                              setName={setName} 
                              errorMessage={errorMessage}
                              loading={loading} />
      }
      {!guestMatch && submit &&
        <div>
          <div className="thank-you-text">Thank you for your RSVP! <br/> Your entry has been recorded.</div>
          <button className="button-23" onClick={goBack}>RSVP Another</button>
        </div>
      }
    </div>
  );
}

export default RSVPFormContainer;