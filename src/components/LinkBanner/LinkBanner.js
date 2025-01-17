import "./LinkBanner.css";
import { Link } from 'react-router-dom';

const LinkBanner = () => {
  return (
    <div className="our-story-banner">
      <div className="our-story-banner-text">
        <div className="our-story-banner-title">See how it all started</div>
        <Link to={`story#poland-root`} className="button-main" style={{backgroundColor: "black", color: "white", fontWeight: 300, padding: "30px 0"}}>
          <span>Our Story</span>
        </Link>
      </div>
    </div>
  );
}

export default LinkBanner;