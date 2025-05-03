import "./JoinUsBanner.css";
import { Link } from "react-router-dom";
import {
  join_us_title,
  join_us_subtext,
  join_us_button,
} from "../../assets/texts";

const JoinUsBanner = ({ lang }) => {
  return (
    <div className="join-us-banner-container">
      <div
        className="join-us-banner"
        style={{
          backgroundImage: `url(https://i.imgur.com/Pr9ZRgS.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="join-us-title">{join_us_title[lang]}</div>
        <div className="join-us-subtext">{join_us_subtext[lang]}</div>
        <Link
          to={`rsvp`}
          className="button-main"
          style={{ padding: "30px 50px" }}
        >
          <span>{join_us_button[lang]}</span>
        </Link>
      </div>
    </div>
  );
};

export default JoinUsBanner;
