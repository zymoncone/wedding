import "./DetailsBanner.css";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";

const first_banner_text = {
  "EN": "Wedding Day",
  "PL": "Dzień Wesela",
  "SP": "Ceremonia"
};

const second_banner_text = {
  "EN": "Poprawiny",
  "PL": "Poprawiny",
  "SP": "Recepción"
};

const first_banner_subtext = {
  "EN": "August 23",
  "PL": "23 Sierpnia",
  "SP": "Te Invitamos"
};

const second_banner_subtext = {
  "EN": "August 24",
  "PL": "24 Sierpnia",
  "SP": "Tambien a Celebrar Juntos"
};

const DetailsBanner = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const isPoland = (props.lang === "EN") || (props.lang === "PL");

  const image = props.useDayOneSetup ? "https://i.imgur.com/Y8AK06t.png" : "https://i.imgur.com/1hbCRsN.png";
  const text = props.useDayOneSetup ? first_banner_text[props.lang] : second_banner_text[props.lang];
  const date = props.useDayOneSetup ? first_banner_subtext[props.lang] : second_banner_subtext[props.lang];

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="day-one-banner-container">
      <div className="day-one-banner" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? (props.useDayOneSetup ? "left" : "right") : (props.useDayOneSetup ? "0px" : "center"),
      }}>
        <div className="day-one-title">
          {text}
        </div>
        {!props.useDayOneSetup && isPoland &&
          <div className="day-two-subtext">(Optional)</div>}
        <div className="day-one-subtext">
          {date}
        </div>
      </div>
    </div>
  );
}

export default DetailsBanner;