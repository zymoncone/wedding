import { useEffect, useState } from "react";
import {
  getItemId,
  updateDynamoDB,
  isFemaleName,
  renderItalicizedText,
} from "../../assets/helper_functions";
import Modal from "../Modal/Modal";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  poprawiny_title,
  poprawiny_text,
  rsvp_able_to_attend,
  rsvp_able_to_attend_2,
  rsvp_is_attending_male,
  rsvp_is_attending_female,
  rsvp_is_not_attending_male,
  rsvp_is_not_attending_female,
  rsvp_courtesy_text,
  rsvp_will_attend,
  rsvp_declines,
  poprawiny_rspv_text,
  poprawiny_rspv_text_2,
  poprawiny_rsvp_question,
  poprawiny_rsvp_question_2,
  poprawiny_not_attending_text_male,
  poprawiny_not_attending_text_female,
  dietary_restrictions_text,
  dietary_restrictions_subtext,
  song_request_text_male,
  song_request_text_female,
} from "../../assets/texts";

const IndividualGuestData = ({ item, index, lastIndex, submit, lang }) => {
  const [id, setId] = useState("");

  const [rsvp, setRSVP] = useState("");
  const [remoteRSVP, pullRemoteRSVP] = useState("");
  const [songRequest, setSongRequest] = useState("");

  const [poprawinyRSVP, setPoprawinyRSVP] = useState("");
  const [remotePoprawinyRSVP, pullRemotePoprawinyRSVP] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setId(getItemId(item));

    pullRemoteRSVP(item["rsvp"] || "");
    setRSVP(item["rsvp"] || "");

    pullRemotePoprawinyRSVP(item["poprawiny-rsvp"] || "");
    setPoprawinyRSVP(item["poprawiny-rsvp"] || "");

    setDietaryRestrictions(item["diet"] || "");

    setSongRequest(item["song-request"] || "");
  }, [item]);

  useEffect(() => {
    if (submit) {
      updateDynamoDB(
        item["id"],
        rsvp,
        songRequest.replace(/[^a-zA-Z0-9\s]/g, "").trim(),
        rsvp === "no" ? "no" : poprawinyRSVP,
        dietaryRestrictions
      );
    }
  }, [submit, item, rsvp, songRequest, poprawinyRSVP, dietaryRestrictions]);

  return (
    <div key={index} className="individual-guest-entry">
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2>{poprawiny_title[lang]}</h2>
        <p>{renderItalicizedText(poprawiny_text[lang])}</p>
      </Modal>

      <div className="spacing"></div>

      <fieldset>
        {remoteRSVP === "yes" && (
          <legend>
            <span className="bold">{id}</span>
            {isFemaleName(id)
              ? rsvp_is_attending_female[lang]
              : rsvp_is_attending_male[lang]}
            <br />
            {rsvp_courtesy_text[lang]}
          </legend>
        )}
        {remoteRSVP === "no" && (
          <legend>
            <span className="bold">{id}</span>
            {isFemaleName(id)
              ? rsvp_is_not_attending_female[lang]
              : rsvp_is_not_attending_male[lang]}
            <br />
            {rsvp_courtesy_text[lang]}
          </legend>
        )}
        {remoteRSVP === "" && (
          <legend>
            {rsvp_able_to_attend[lang]}
            <span className="bold">{id}</span>
            {rsvp_able_to_attend_2[lang]}
          </legend>
        )}
        <label className="radio-input-row">
          <input
            className="radio-input"
            type="radio"
            value="yes"
            checked={rsvp === "yes"}
            onChange={(e) => setRSVP(e.target.value)}
            name={`rsvp-yes-${index}`}
          />
          <span className="radio-select-text">{rsvp_will_attend[lang]}</span>
        </label>

        <label className="radio-input-row">
          <input
            className="radio-input"
            type="radio"
            value="no"
            checked={rsvp === "no"}
            onChange={(e) => setRSVP(e.target.value)}
            name={`rsvp-no-${index}`}
          />
          <span className="radio-select-text">{rsvp_declines[lang]}</span>
        </label>
      </fieldset>

      {rsvp === "yes" && (
        <fieldset>
          <legend>
            <span className="poprawiny-rsvp-text">
              {remotePoprawinyRSVP === "yes" && (
                <>
                  {poprawiny_rspv_text[lang]}
                  <span className="bold">{id}</span>
                  {poprawiny_rspv_text_2[lang]}
                  <br />
                  {rsvp_courtesy_text[lang]}
                </>
              )}
              {remotePoprawinyRSVP === "no" && (
                <>
                  <span className="bold">{id}</span>
                  {isFemaleName(id)
                    ? poprawiny_not_attending_text_female[lang]
                    : poprawiny_not_attending_text_male[lang]}
                  <br />
                  {rsvp_courtesy_text[lang]}
                </>
              )}
              {remotePoprawinyRSVP === "" && (
                <>
                  {poprawiny_rsvp_question[lang]}
                  <span className="bold">{id}</span>
                  {poprawiny_rsvp_question_2[lang]}
                </>
              )}
            </span>
            <IoIosInformationCircleOutline
              onClick={handleOpenModal}
              className="question-mark"
            />
          </legend>

          <label className="radio-input-row">
            <input
              className="radio-input"
              type="radio"
              value="yes"
              checked={poprawinyRSVP === "yes"}
              onChange={(e) => setPoprawinyRSVP(e.target.value)}
              name={`poprawinu-rsvp-yes-${index}`}
            />
            <span className="radio-select-text">{rsvp_will_attend[lang]}</span>
          </label>

          <label className="radio-input-row">
            <input
              className="radio-input"
              type="radio"
              value="no"
              checked={poprawinyRSVP === "no"}
              onChange={(e) => setPoprawinyRSVP(e.target.value)}
              name={`poprawinu-rsvp-no-${index}`}
            />
            <span className="radio-select-text">{rsvp_declines[lang]}</span>
          </label>
        </fieldset>
      )}

      {rsvp === "yes" && (
        <label className="label-input-container">
          <span className="label-text">
            {dietary_restrictions_text[lang]}
            <br />
            <span className="label-diet-subtext">
              {dietary_restrictions_subtext[lang]}
            </span>
          </span>
          <input
            type="text"
            value={dietaryRestrictions}
            onChange={(e) => setDietaryRestrictions(e.target.value)}
            name={`dietary-restrictions-${index}`}
          />
        </label>
      )}

      {rsvp === "yes" && (
        <label className="label-input-container">
          <span className="label-text">
            {isFemaleName(id)
              ? song_request_text_female[lang]
              : song_request_text_male[lang]}
          </span>
          <input
            type="text"
            value={songRequest}
            onChange={(e) => setSongRequest(e.target.value)}
            name={`song-request-${index}`}
          />
        </label>
      )}

      {lastIndex !== index && <span className="dot"></span>}
    </div>
  );
};

export default IndividualGuestData;
