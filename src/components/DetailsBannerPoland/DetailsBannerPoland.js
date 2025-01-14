import "./DetailsBannerPoland.css";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";

const DetailsBannerPoland = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const image = props.useDayOneSetup ? "https://i.imgur.com/Y8AK06t.png" : "https://i.imgur.com/1hbCRsN.png";
  const text = props.useDayOneSetup ? "Wedding Day" : "Second Day";
  const date = props.useDayOneSetup ? "August 23" : "August 24";

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
        {!props.useDayOneSetup &&
         <div className="day-two-subtext">(Optional)</div>}
        <div className="day-one-subtext">
          {date}
        </div>
      </div>
    </div>
  );
}

export default DetailsBannerPoland;