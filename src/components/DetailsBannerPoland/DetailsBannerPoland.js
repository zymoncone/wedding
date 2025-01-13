import "./DetailsBannerPoland.css";
import test from "../../media/Root/test.png";
import day_two_banner from "../../media/Root/day-two-banner.png";

const DetailsBannerPoland = (props) => {
  const image = props.useDayOneSetup ? test : day_two_banner;
  const text = props.useDayOneSetup ? "Wedding Day" : "Poprawiny";
  const date = props.useDayOneSetup ? "August 23, 2025" : "August 24, 2025";

  return (
    <div className="day-one-banner-container">
      <div className="day-one-banner" style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <div className="day-one-title">
          {text}
        </div>
        <div className="day-one-subtext">
          {date}
        </div>
      </div>
    </div>
  );
}

export default DetailsBannerPoland;