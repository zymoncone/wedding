import './RSVPForm.css';
import { useState } from 'react';

function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Attending: ${attending}`);
  };

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <label>
        <span className='label-text'>Name</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        <span className='label-text'>Email</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        <div className="dropdown">
          <span className='label-text'>Will you be attending?</span>
          <select className="attendance-selection" value={attending} onChange={(e) => setAttending(e.target.value)} required>
            <option value="">Select...</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </label>
      <div style={{margin: "1rem"}}></div>
      <button className="button-23">Submit</button>
    </form>
  );
}

export default RSVPForm;