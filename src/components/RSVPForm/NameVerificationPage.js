import './RSVPForm.css';

const NameVerificationPage = ({handleContinue, name, setName, errorMessage, loading}) => {

  return (
    <form className="rsvp-form" onSubmit={handleContinue}>
      <label className="name-verification-input-container">
        <span className='name-verification-text-title'>Please enter your first and last name</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      {errorMessage && <p className="error-message">
        Name not found. Please make sure it matches the invitaiton exactly.
      </p>}
      <div style={{margin: "1rem"}}></div>
      {loading ? 
        <div className="loading-spinner"></div> :
        <button className="button-23">Continue</button>
      }
    </form>
  );
}

export default NameVerificationPage;