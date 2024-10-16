import { useEffect, useState } from 'react';
import { updateDynamoDB } from '../../assets/helper_functions';

const IndividualGuestData = ({ item, index, lastIndex, submit, setConfirmedRSVP }) => {

  const [rsvp, setRsvp] = useState('');
  const [remoteRSVP, pullRemoteRSVP] = useState(item['rsvp']);
  const [songRequest, setSongRequest] = useState(item['song-request']);

  useEffect(() => {
    pullRemoteRSVP(item['rsvp']);
    setRsvp(item['rsvp']);
    setSongRequest(item['song-request']);
  }, [item]);

  useEffect(() => {
    const partySize = lastIndex + 1;

    if (remoteRSVP === '') {
      setConfirmedRSVP((prev) => (prev !== 0 ? prev - 1 : 0));
    } else {
      setConfirmedRSVP((prev) => (prev !== partySize ? prev + 1 : partySize));
    }
  }, [remoteRSVP, setConfirmedRSVP, lastIndex]);

  useEffect(() => {
    if (submit) {
      console.log('submitting RSVP for:', item['id']);
      console.log('setting RSVP to:', rsvp);
      console.log('setting song request to:', songRequest);
      updateDynamoDB(item['id'], rsvp, songRequest);
    }
  }, [submit, item, rsvp, songRequest]);

  return (
    <div key={index} className="individual-guest-entry">
      <div className="spacing"></div>

      <fieldset>
        {remoteRSVP === 'yes' && <legend>{item['id']} is marked as attending. <br/>Feel free to update below.</legend>}
        {remoteRSVP === 'no' && <legend>{item['id']} is marked as not attending. <br/>Feel free to update below.</legend>}
        {remoteRSVP === '' && <legend>Is {item['id']} Able to Attend?</legend>}

        <label className="radio-input-row">
          <input className="radio-input" type="radio" value="yes" checked={rsvp === 'yes'} onChange={(e) => setRsvp(e.target.value)} />
          <span className="radio-select-text">Yes, Will Attend</span>
        </label>

        <label className="radio-input-row">
          <input className="radio-input" type="radio" value="no" checked={rsvp === 'no'} onChange={(e) => setRsvp(e.target.value)} />
          <span className="radio-select-text">No, Declines With Regret</span>
        </label>
      </fieldset>
      <div className="spacing"></div>

      <label>
        <span className="label-text">Song Request</span>
        <input type="text" value={songRequest} onChange={(e) => setSongRequest(e.target.value)} />
      </label>

      {(lastIndex !== index) && <span className="dot"></span>}
    </div>
  );
}

export default IndividualGuestData;