import './RSVPForm.css';
import { useState, useEffect } from 'react';
import { readTable } from '../../assets/helper_functions';

function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('');
  const [guestMatch, setGuestMatch] = useState(false);
  const [guestName, setGuestName] = useState('none');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Attending: ${attending}`);
  };

  useEffect(() => {
    console.log(name);
    
    readTable(name)
    .then(response => {
    if (response && response.Item) {
      console.log('Item exists:', response.Item);
      setGuestMatch(true);
      setGuestName(response.Item.guest);
    } else {
      console.log('Item does not exist');
      setGuestMatch(false);
      setGuestName('none');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }
  , [name]);

  return (
    <form className="rsvp-form" onSubmit={handleSubmit}>
      <label>
        <span className='label-text'>Name</span>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      {guestMatch ? <p className="guest-match">You're on the list! Can't wait to see you!</p> : null}
      {guestName !== 'none' ? 
         <p className="guest-match">We see that you have {guestName} as a guest!</p> : 
         null}
      {guestName === 'none' && guestMatch ?
          <p className="guest-match">No +1 but please come!</p> : null}
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