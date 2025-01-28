import { useEffect, useState } from "react";
import "./LinkBanner.css";
import { Link } from 'react-router-dom';
import { isMobileDevice } from "../../assets/helper_functions";

const banner_title = {
  'EN': "See how it all started",
  'PL': "Zobacz jak to się zaczęło",
  'SP': "Mira cómo todo comenzó"
};

const button_text = {
  'EN': "Our Story",
  'PL': "Nasza Historia",
  'SP': "Nuestra Historia"
};

const faq_title = {
  'EN': "Still have questions?",
  'PL': "Masz pytania?",
  'SP': "¡Todas tus dudas sobre la boda, resueltas aquí!"
};

const faq_button_text = {
  'EN': "FAQ",
  'PL': "FAQ",
  'SP': "Preguntas Frecuentes"
};

const LinkBanner = ({ lang, faq_banner = false }) => {

  const [marginStyle, setMarginStyle] = useState("");

  const isArgentinaAndStoryBanner = (lang === "SP" && !faq_banner);
  const isArgentinaAndFAQBanner = (lang === "SP" && faq_banner);
  const isPolandAndStoryBanner = ((lang === "EN" || lang === "PL") && !faq_banner);

  useEffect(() => {
    if (isMobileDevice() && isArgentinaAndStoryBanner) {
      setMarginStyle("2rem 0 1rem 0");
    }
    else if (isMobileDevice() && isArgentinaAndFAQBanner) {
      setMarginStyle("5rem 0 6rem 0");
    }
    else if (!isMobileDevice() && isArgentinaAndStoryBanner) {
      setMarginStyle("5rem 0");
    }
    else if (isMobileDevice() && isPolandAndStoryBanner) {
      setMarginStyle("5rem 0");
    }
    else if (!isMobileDevice() && isPolandAndStoryBanner) {
      setMarginStyle("7rem 0");
    }
    else {
      setMarginStyle("");
    }
  }, [isArgentinaAndStoryBanner, isPolandAndStoryBanner, isArgentinaAndFAQBanner]);

  return (
    <div className="our-story-banner" style={{ margin: marginStyle }}>
      <div className="our-story-banner-text">
        <div className="our-story-banner-title">{faq_banner ? faq_title[lang] : banner_title[lang]}</div>
        <Link to={faq_banner ? `faq#top` : `story#top`} className="button-main" style={{ backgroundColor: "black", color: "white", fontWeight: 300, padding: "30px 50px" }}>
          <span>{faq_banner ? faq_button_text[lang] : button_text[lang]}</span>
        </Link>
      </div>
    </div>
  );
}

export default LinkBanner;