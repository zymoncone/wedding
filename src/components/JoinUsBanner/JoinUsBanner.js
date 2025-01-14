import "./JoinUsBanner.css";
import { Link } from "react-router-dom";

const JoinUsBanner = () => {
  return (
    <div className="join-us-banner-container">
      <div className="join-us-banner" style={{
      backgroundImage: `url(https://i.imgur.com/Pr9ZRgS.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <div className="join-us-title">
          Join Us
        </div>
        <div className="join-us-subtext">
          We hope you can make it!
        </div>
        <Link to={`rsvp`} className="button-main" style={{padding: "30px 0", margin: 0, fontSize: "20px"}}>
          <span>RSVP</span>
        </Link>
      </div>
    </div>
  );
}

export default JoinUsBanner;