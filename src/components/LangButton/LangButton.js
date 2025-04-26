import "./LangButton.css";
import { GB, PL } from "country-flag-icons/react/1x1";
import { useState } from "react";

const LangButton = ({ toggableLang, setTogglableLang }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    // Start the animation
    setIsFlipping(true);

    // Determine the new language
    let newLang;
    if (toggableLang === "EN") {
      newLang = "PL";
    } else if (toggableLang === "PL") {
      newLang = "EN";
    }

    // Change the language after half of the animation completes
    setTimeout(() => {
      // Update app state
      setTogglableLang(newLang);

      // Save preference to localStorage only if not 'SP'
      if (newLang !== "SP") {
        localStorage.setItem("preferredLanguage", newLang);
      }
    }, 150); // Half of the full animation duration

    // Reset animation state after the full animation
    setTimeout(() => {
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div
      className={`lang-button ${isFlipping ? "flipping" : ""}`}
      onClick={handleClick}
    >
      <div className="flag-container">
        <div className="flag-front">
          {toggableLang === "PL" ? (
            <GB title="English" />
          ) : (
            <PL title="Polish" />
          )}
        </div>
        <div className="flag-back">
          {toggableLang === "PL" ? (
            <GB title="English" />
          ) : (
            <PL title="Polish" />
          )}
        </div>
      </div>
    </div>
  );
};

export default LangButton;
