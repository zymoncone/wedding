import "./JoinUsBanner.css";
import { Link } from "react-router-dom";
import join_us_banner from "../../media/Root/join-us-banner.png";

const JoinUsBanner = () => {
  return (
    <div className="join-us-banner-container">
      <div className="join-us-banner" style={{
      backgroundImage: `url(${join_us_banner})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <div className="join-us-title">
          Join Us
        </div>
        <div className="join-us-subtext">
          We hope you can make it!
        </div>
        <Link to={`rsvp`} className="button-main">
          <span>RSVP</span>
        </Link>
      </div>
    </div>
  );
}

export default JoinUsBanner;