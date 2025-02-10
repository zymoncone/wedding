import './RSVPForm.css';
import IndividualGuestData from './IndividualGuestData';
import { useEffect } from 'react';
import { sleep, getItemId } from '../../assets/helper_functions';

const RSVPForm = ({partyData,
                   setGuestMatch,
                   submit,
                   setSubmit
                  }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  }

  useEffect(() => {
    const handleRSVPSubmission = async () => {
      if (submit) {
        if (process.env.REACT_APP_NODE_ENV === 'development') {
          console.log('submitting RSVPs');
        }
        await sleep(1000);
        setGuestMatch(false);
      }
    };

    handleRSVPSubmission();
  }, [submit, setGuestMatch]);

  return (
    <div className="rsvp-form-subcontainer">
      {partyData && partyData.length > 0 ? (
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="invited-guests-container">
            <span className="label-text invited-guest-text">Invited Guests</span>
            {partyData.map((item, index) => (
              <div key={index} className="label-name">
                {getItemId(item)}
              </div>
            ))}
          </div>
          {partyData.map((item, index) => (
            <IndividualGuestData key={index}
                                 item={item}
                                 index={index}
                                 lastIndex={(partyData.length - 1)}
                                 submit={submit}
                                  />
          ))}
          <div style={{margin: "1rem"}}></div>
          {!submit && <button className="button-23">Submit RSVP</button>}
          {submit && <div className="loading-spinner"></div>}
        </form>
      ) :
      (
        <div className="loading-spinner"></div>
      )}
    </div>
  );
}

export default RSVPForm;