import './RSVPForm.css';
import { rsvp_subtitle,
         continue_button,
         rsvp_name_not_found } from '../../assets/texts';

const NameVerificationPage = ({ handleContinue,
                                name,
                                setName,
                                errorMessage,
                                loading,
                                lang }) => {

  return (
    <form className="rsvp-form" onSubmit={handleContinue}>
      <label className="name-verification-input-container">
        <span className='name-verification-text-title'>{rsvp_subtitle[lang]}</span>
        <input type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               name={`rsvp-name-entry`}
               required />
      </label>
      {errorMessage && <p className="error-message">
        {rsvp_name_not_found[lang]}
      </p>}
      <div style={{margin: "1rem"}}></div>
      {loading ?
        <div className="loading-spinner"></div> :
        <button className="button-23">{continue_button[lang]}</button>
      }
    </form>
  );
}

export default NameVerificationPage;