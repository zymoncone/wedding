import "./DetailsBannerPoland.css";
import test from "../../media/Root/test.png";
import day_two_banner from "../../media/Root/day-two-banner.png";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";

const DetailsBannerPoland = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  const image = props.useDayOneSetup ? test : day_two_banner;
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