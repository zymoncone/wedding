import "./WeddingDetails.css";
import Button from "../Button/Button";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import { renderItalicizedText } from "../../assets/helper_functions";
import {
  first_banner_title,
  first_banner_time,
  first_banner_address_top,
  first_banner_address_mid,
  first_banner_address_bot,
  first_banner_map,
  first_banner_attire,
  second_banner_title,
  second_banner_time,
  second_banner_address_top,
  second_banner_address_mid,
  second_banner_address_bot,
  second_banner_map,
  second_banner_attire,
  map_travel_link,
  poprawiny_title,
  poprawiny_text,
} from "../../assets/texts";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
import { useState } from "react";
import Modal from "../Modal/Modal";

const WeddingDetails = ({ lang }) => {
  const isPoland = lang === "PL" || lang === "EN";
  const isEnglish = lang === "EN";
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleCloseModal = () => {
    setAnimateModal(false);
    // Delay hiding to allow animation to complete
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  };

  const handleOpenModal = () => {
    setShowModal(true);
    // Add small delay for animation
    setTimeout(() => {
      setAnimateModal(true);
    }, 50);
  };

  return (
    <div className="details-parent-container">
      <Modal show={showModal} onClose={handleCloseModal} animate={animateModal}>
        <h2>{poprawiny_title[lang]}</h2>
        <p>{renderItalicizedText(poprawiny_text[lang])}</p>
      </Modal>
      {isPoland && (
        <ScrollAnimation delay={100}>
          <DetailsBanner
            useDayOneSetup={true}
            lang={lang}
            handleOpenModal={handleOpenModal}
          />
          <div className="details-individual-container-poland">
            <h1 className="subtitle">{first_banner_title[lang]}</h1>
            <div className="details-subtext-container">
              <div className="date-details-container">
                <p className="date-details-subtext">
                  {first_banner_time[lang]}
                </p>
              </div>
              <div className="address-details-container">
                <p className="address-details-subtext">
                  {first_banner_address_top[lang]}
                </p>
                <p className="address-details-subtext">
                  {first_banner_address_mid[lang]}
                </p>
                <p className="address-details-subtext">
                  {first_banner_address_bot[lang]}
                </p>
              </div>
            </div>
            <Button
              text={map_travel_link[lang]}
              address={first_banner_map[lang]}
            />
            {isEnglish && (
            <div className="attire-details-container">
              <p className="attire-details-subtext">
                {first_banner_attire[lang]}
              </p>
            </div>)}
          </div>
        </ScrollAnimation>
      )}
      <ScrollAnimation delay={200}>
        <DetailsBanner
          useDayOneSetup={false}
          lang={lang}
          handleOpenModal={handleOpenModal}
        />
        <div className="details-individual-container-poland">
          <h1 className="subtitle">{second_banner_title[lang]}</h1>
          <div className="details-subtext-container">
            <div className="date-details-container">
              <p className="date-details-subtext">{second_banner_time[lang]}</p>
            </div>
            <div className="address-details-container">
              <p className="address-details-subtext">
                {second_banner_address_top[lang]}
              </p>
              <p className="address-details-subtext">
                {second_banner_address_mid[lang]}
              </p>
              <p className="address-details-subtext">
                {second_banner_address_bot[lang]}
              </p>
            </div>
          </div>
          <Button
            text={map_travel_link[lang]}
            address={second_banner_map[lang]}
          />
          {isEnglish && (
            <div className="attire-details-container">
              <p className="attire-details-subtext">
                {second_banner_attire[lang]}
              </p>
            </div>
          )}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default WeddingDetails;
