import './RSVPForm.css';
import IndividualGuestData from './IndividualGuestData';
import { useEffect } from 'react';
import { sleep } from '../../assets/helper_functions';
// import PolandDetailsForRSVP from '../PolandDetailsForRSVP/PolandDetailsForRSVP';

const RSVPForm = ({partyData, 
                   setGuestMatch, 
                   submit, 
                   setSubmit,
                   confirmedRSVP,
                   setConfirmedRSVP}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  }

  useEffect(() => {
    const handleRSVPSubmission = async () => {
      if (submit) {
        console.log('submitting RSVPs');
        await sleep(1000);
        setGuestMatch(false);
        setConfirmedRSVP(0);
      }
    };

    handleRSVPSubmission();
  }, [submit, setGuestMatch, setConfirmedRSVP]);

  return (
    <div>
      {/* <PolandDetailsForRSVP /> */}
      {partyData && partyData.length > 0 ? (
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="invited-guests-container">
            <span className="label-text invited-guest-text">Invited Guests</span>
            {partyData.map((item, index) => (
              <label key={index}>
                <div className="label-name">{item['id']}</div>
              </label>
            ))}
          </div>
          {partyData.map((item, index) => (
            <IndividualGuestData key={index} 
                                 item={item} 
                                 index={index} 
                                 lastIndex={(partyData.length - 1)}
                                 submit={submit}
                                 setConfirmedRSVP={setConfirmedRSVP} />
          ))}
          <div style={{margin: "1rem"}}></div>
          <button className="button-23">Submit RSVP</button>
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