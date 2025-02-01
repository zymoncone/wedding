import { useEffect, useState } from 'react';
import { updateDynamoDB } from '../../assets/helper_functions';
import Modal from '../Modal/Modal';
import { IoIosInformationCircleOutline } from "react-icons/io";

const IndividualGuestData = ({ item, index, lastIndex, submit, setConfirmedRSVP }) => {

  const [rsvp, setRSVP] = useState('');
  const [remoteRSVP, pullRemoteRSVP] = useState('');
  const [songRequest, setSongRequest] = useState('');

  const [poprawinyRSVP, setPoprawinyRSVP] = useState('');
  const [remotePoprawinyRSVP, pullRemotePoprawinyRSVP] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    pullRemoteRSVP(item['rsvp'] || '');
    setRSVP(item['rsvp'] || '');
    setSongRequest(item['song-request'] || '');

    pullRemotePoprawinyRSVP(item['poprawiny-rsvp'] || '');
    setPoprawinyRSVP(item['poprawiny-rsvp'] || '');
    setDietaryRestrictions(item['diet'] || '');
  }, [item]);

  // useEffect(() => {
  //   const partySize = lastIndex + 1;

  //   if (remoteRSVP === '') {
  //     setConfirmedRSVP((prev) => (prev !== 0 ? prev - 1 : 0));
  //   } else {
  //     setConfirmedRSVP((prev) => (prev !== partySize ? prev + 1 : partySize));
  //   }
  // }, [remoteRSVP, setConfirmedRSVP, lastIndex]);

  useEffect(() => {
    if (submit) {

      updateDynamoDB(
        item['id'],
        rsvp,
        songRequest.replace(/[^a-zA-Z0-9\s]/g, '').trim(),
        (rsvp === 'no') ? "no" : poprawinyRSVP,
        dietaryRestrictions);
    }

    console.log('RSVP:', rsvp);
    console.log('Poprawiny RSVP:', poprawinyRSVP);
  }, [submit, item, rsvp, songRequest, poprawinyRSVP, dietaryRestrictions]);

  return (
    <div key={index} className="individual-guest-entry">
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2>What is Poprawiny?</h2>
        <p>
          Poprawiny is a lovely Polish tradition held on the second day of
          the wedding celebration. It’s an optional luncheon where the newlyweds
          spend more time with their guests. The tradition goes back many centuries
          and was originally meant to ensure that guests were safely sent off after
          the festivities.
          While attendance is completely optional, we would love to know
          if you’ll be joining us—please kindly RSVP!
        </p>
      </Modal>

      <div className="spacing"></div>

      <fieldset>
        {remoteRSVP === 'yes' && <legend><span className="bold">{item['id']}</span> is marked as attending. <br/>Feel free to update below.</legend>}
        {remoteRSVP === 'no' && <legend><span className="bold">{item['id']}</span> is marked as not attending. <br/>Feel free to update below.</legend>}
        {remoteRSVP === '' && <legend>Is <span className="bold">{item['id']}</span> Able to Attend?</legend>}

        <label className="radio-input-row">
          <input className="radio-input" type="radio" value="yes" checked={rsvp === 'yes'} onChange={(e) => setRSVP(e.target.value)} />
          <span className="radio-select-text">Yes, Will Attend</span>
        </label>

        <label className="radio-input-row">
          <input className="radio-input" type="radio" value="no" checked={rsvp === 'no'} onChange={(e) => setRSVP(e.target.value)} />
          <span className="radio-select-text">No, Declines With Regret</span>
        </label>
      </fieldset>

      {rsvp === 'yes' && <fieldset>
        <legend>
          <span className="poprawiny-rsvp-text">
            {remotePoprawinyRSVP === 'yes' && <>We'll see <span className="bold">{item['id']}</span> at Poprawiny as well!<br/>Feel free to update below.</>}
            {remotePoprawinyRSVP === 'no' && <><span className="bold">{item['id']}</span> is only attending the first day. <br/>Feel free to update below.</>}
            {remotePoprawinyRSVP === '' && <>Is <span className="bold">{item['id']}</span> Also Able to Attend Poprawiny on Aug 24?</>}
          </span>
          <IoIosInformationCircleOutline onClick={handleOpenModal} className="question-mark" />
        </legend>

        <label className="radio-input-row"></label>
        <label className="radio-input-row">
          <input className="radio-input" type="radio" value="yes" checked={poprawinyRSVP === 'yes'} onChange={(e) => setPoprawinyRSVP(e.target.value)} />
          <span className="radio-select-text">Yes, Will Attend</span>
        </label>

        <label className="radio-input-row">
          <input className="radio-input" type="radio" value="no" checked={poprawinyRSVP === 'no'} onChange={(e) => setPoprawinyRSVP(e.target.value)} />
          <span className="radio-select-text">No, Declines With Regret</span>
        </label>
      </fieldset>}

      {rsvp === 'yes' && <label className="label-input-container">
        <span className="label-text">
        Any Dietary Restrictions?<br/>
        <span className="label-diet-subtext">(None, Vegetarian, Other)</span>
        </span>
        <input type="text" value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.target.value)} />
      </label>}

      {rsvp === 'yes' && <label className="label-input-container">
        <span className="label-text">Song Request</span>
        <input type="text" value={songRequest} onChange={(e) => setSongRequest(e.target.value)} />
      </label>}

      {(lastIndex !== index) && <span className="dot"></span>}
    </div>
  );
}

export default IndividualGuestData;