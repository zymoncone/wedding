import "./TravelAndStay.css";
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import Map from "../Map/Map";

const TravelAndStay = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
      if (isMobileDevice()) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }, []);

  return (
    <div className="travel-and-stay">
      <div className="travel-background-container" style={{
        backgroundImage: `url(https://i.imgur.com/E0XH98J.png)`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "-600px" : "center",
      }}>
      <div className="travel-text">Travel</div>
      <div className="travel-text subtext">Niepolomice, Poland</div>
    </div>
    <div style={{marginTop: "500px"}}></div>
    <Map />
    </div>
  );
}

export default TravelAndStay;