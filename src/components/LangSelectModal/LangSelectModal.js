import "./LangSelectModal.css";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { GB, PL } from "country-flag-icons/react/1x1";

const LangSelectModal = ({ setTogglableLang }) => {
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedRSVP = localStorage.getItem("hasVisitedRSVP");
    if (process.env.REACT_APP_NODE_ENV === "development") {
      console.log("Initial localStorage value:", hasVisitedRSVP);
    }

    if (!hasVisitedRSVP) {
      // Delay showing the modal by 1000ms (1 second)
      const showTimer = setTimeout(() => {
        setShowModal(true);

        // Add a small additional delay for the animation
        setTimeout(() => {
          setAnimateModal(true);

          // Only set localStorage after modal is shown
          // This prevents the flag from being set if the user
          // navigates away before the modal appears
          localStorage.setItem("hasVisitedRSVP", "true");
          if (process.env.REACT_APP_NODE_ENV === "development") {
            console.log("localStorage flag set to true after modal appears");
          }
        }, 100);
      }, 1000);

      // Clean up timer if component unmounts before modal appears
      return () => clearTimeout(showTimer);
    }
  }, []);

  const handleCloseModal = () => {
    setAnimateModal(false);
    // Delay hiding the modal to allow animation to complete
    setTimeout(() => {
      setShowModal(false);
    }, 300);
  };

  const selectLanguage = (lang) => {
    // Set the language in the app state
    setTogglableLang(lang);

    // Also save to localStorage for persistence across visits
    // But don't save if it's 'SP'
    if (lang !== "SP") {
      localStorage.setItem("preferredLanguage", lang);
    }

    // Close the modal
    handleCloseModal();
  };

  return (
    <div>
      <Modal show={showModal} onClose={handleCloseModal} animate={animateModal}>
        <h2>Welcome! Witamy!</h2>
        <p style={{ margin: 0 }}>But first, select your language:</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="language-options">
            <div
              className="language-option"
              onClick={() => selectLanguage("EN")}
            >
              <div className="flag-circle">
                <GB title="English" />
              </div>
              <span>english</span>
            </div>
            <div
              className="language-option"
              onClick={() => selectLanguage("PL")}
            >
              <div className="flag-circle">
                <PL title="Polski" />
              </div>
              <span>polski</span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LangSelectModal;
