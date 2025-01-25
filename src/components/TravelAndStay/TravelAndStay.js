import "./TravelAndStay.css";
import { useEffect, useState } from "react";
import { isMobileDevice, isIpad } from "../../assets/helper_functions";
import Map from "../Map/Map";
import { useAppContext } from "../SubRoot/SubRoot";
import Button from "../Button/Button";

const TravelAndStay = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { isDoneAnimating } = useAppContext();

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
        backgroundPosition: isMobile && !isIpad ? "-700px" : "center",
        position: (isDoneAnimating || !isMobile) ? "relative" : "fixed",
        opacity: (isDoneAnimating || !isMobile) ? 1 : 0,
      }}>
        <div className="travel-text">Travel</div>
        <div className="travel-text subtext">Niepołomice, Poland</div>
      </div>
      <div className="travel-and-stay-content">
        <div className="directions-container">
          <div className="directions-title">Directions</div>
          <div className="directions-text-row">

            <div className="directions-text-col">
              <div className="directions-text-header">Fly into Warsaw</div>
              <div className="directions-text-body">
                <p>
                  It is often more affordable to fly into Chopin Airport. From there, you can take a high-speed train with
                  (<a href="https://www.intercity.pl/en/"
                    target={isMobile ? "" : "_blank"}
                    rel={isMobile ? "" : "noreferrer"}>PKP Intercity</a>)
                  to Kraków. Tickets typically range from 70 to 170 PLN
                  (approximately 17 to 42 USD), and the journey takes just over two hours.
                </p>
              </div>
            </div>

            <div className="directions-text-col">
              <div className="directions-text-header">Fly into Kraków</div>
              <div className="directions-text-body">
                <p>
                  While flights to this location are generally more expensive, Niepołomice is conveniently located just 30 minutes away by car.
                </p>
              </div>
            </div>

          </div>
        </div>
        <Map />
        <div className="stay-container">
          <div className="stay-background-container" style={{
            backgroundImage: `url(https://i.imgur.com/VPyXk9t.png)`,
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "0px" : "center",
            position: (isDoneAnimating || !isMobile) ? "relative" : "fixed",
          }}>
            <div className="stay-title">Stay</div>
          </div>
          <div className="stay-text-header">Hotel Novum</div>
          <div className="stay-text-body">
            <p>
              We have reserved rooms for our guests at Hotel Novum, located just 500 meters (1/3 miles) from the castle for your convenience.
            </p>
            <div className="address">
              32-005 Niepołomice
            </div>
            <div className="address">
              ul. Grunwaldzka 15H
            </div>
            <div style={{ margin: "20px 0 0 0" }}></div>
            <Button text={"Map"}
              address={"https://maps.app.goo.gl/AHdmkP27noQbeqjm9"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelAndStay;