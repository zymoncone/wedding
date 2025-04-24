import "./DetailsBanner.css";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import Modal from '../Modal/Modal';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { first_banner_text,
         second_banner_text,
         first_banner_subtext,
         second_banner_subtext,
         optional_text,
         poprawiny_title,
         poprawiny_text } from "../../assets/texts";

const DetailsBanner = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const isPoland = (props.lang === "EN") || (props.lang === "PL");

  const image = props.useDayOneSetup ? "https://i.imgur.com/Y8AK06t.png" : "https://i.imgur.com/1hbCRsN.png";
  const text = props.useDayOneSetup ? first_banner_text[props.lang] : second_banner_text[props.lang];
  const date = props.useDayOneSetup ? first_banner_subtext[props.lang] : second_banner_subtext[props.lang];

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="day-one-banner-container">
      <Modal show={showModal} onClose={handleCloseModal}>
        <h2>{poprawiny_title[props.lang]}</h2>
        <p>
          {poprawiny_text[props.lang]}
        </p>
      </Modal>
      <div className="day-one-banner" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? (props.useDayOneSetup ? "left" : "right") : (props.useDayOneSetup ? "0px" : "center"),
      }}>
        <div className="day-one-title">
          {text}{(!props.useDayOneSetup && isPoland) && <IoIosInformationCircleOutline onClick={handleOpenModal} className="question-mark-details-banner" />}
        </div>
        {!props.useDayOneSetup && isPoland &&
          <div className="day-two-subtext">{optional_text[props.lang]}</div>}
        <div className="day-one-subtext">
          {date}
        </div>
      </div>
    </div>
  );
}

export default DetailsBanner;