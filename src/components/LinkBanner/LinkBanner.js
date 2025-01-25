import "./LinkBanner.css";
import { Link } from 'react-router-dom';

const banner_title = {'EN': "See how it all started",
                      'PL': "Zobacz jak to się zaczęło",
                      'SP': "Mira cómo todo comenzó"};

const button_text = {'EN': "Our Story",
                     'PL': "Nasza Historia",
                     'SP': "Nuestra Historia"};

const LinkBanner = ({ lang }) => {
  return (
    <div className="our-story-banner">
      <div className="our-story-banner-text">
        <div className="our-story-banner-title">{banner_title[lang]}</div>
        <Link to={`story#top`} className="button-main" style={{backgroundColor: "black", color: "white", fontWeight: 300, padding: "30px 0", width: "200px"}}>
          <span>{button_text[lang]}</span>
        </Link>
      </div>
    </div>
  );
}

export default LinkBanner;