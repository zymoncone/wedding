import "./JoinUsBanner.css";
import { Link } from "react-router-dom";

const join_us_title = {
  "EN": "Join Us",
  "PL": "Dołącz do nas",
  "SP": "Únete a nosotros"
};

const join_us_subtext = {
  "EN": "We hope you can make it!",
  "PL": "Mamy nadzieję, że się pojawisz!",
  "SP": "¡Esperamos que puedas hacerlo!"
};

const join_us_button = {
  "EN": "RSVP",
  "PL": "Potwierdzenie przybycia",
  "SP": "RSVP"
};

const JoinUsBanner = ({ lang }) => {
  return (
    <div className="join-us-banner-container">
      <div className="join-us-banner" style={{
      backgroundImage: `url(https://i.imgur.com/Pr9ZRgS.png)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <div className="join-us-title">
          {join_us_title[lang]}
        </div>
        <div className="join-us-subtext">
          {join_us_subtext[lang]}
        </div>
        <Link to={`rsvp`} className="button-main" style={{padding: "30px 50px"}}>
          <span>{join_us_button[lang]}</span>
        </Link>
      </div>
    </div>
  );
}

export default JoinUsBanner;