import "./TravelAndStay.css";
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import Map from "../Map/Map";
import { useAppContext } from "../SubRoot/SubRoot";
import Button from "../Button/Button";
import { travel_title,
         travel_subtitle,
         travel_directions_title,
         travel_directions_text,
         travel_directions_text_2,
         travel_directions_text_body_part_1,
         travel_directions_text_body_part_2,
         travel_directions_text_body_3,
         map_travel_link, stay_title,
         stay_subtitle, stay_text,
         car_rental_title } from "../../assets/texts";

const TravelAndStay = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isIpad, setIsIpad] = useState(false);

  const { togglableLang, isDoneAnimating } = useAppContext();

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    setIsIpad(window.innerWidth >= 768)
  }, []);

  return (
    <div className="travel-and-stay">
      <div className="travel-background-container" style={{
        backgroundImage: `url(https://i.imgur.com/E0XH98J.png)`,
        backgroundSize: "cover",
        backgroundPosition: isMobile && !isIpad ? "-600px" : "center",
        position: (isDoneAnimating || !isMobile) ? "relative" : "fixed",
        opacity: (isDoneAnimating || !isMobile) ? 1 : 0,
      }}>
        <div className="travel-text">{travel_title[togglableLang]}</div>
        <div className="travel-text subtext">{travel_subtitle[togglableLang]}</div>
      </div>
      <div className="travel-and-stay-content">
        <div className="directions-container">
          <div className="directions-title">{travel_directions_title[togglableLang]}</div>
          <div className="directions-text-row">

            <div className="directions-text-col">
              <div className="directions-text-header">{travel_directions_text[togglableLang]}</div>
              <div className="directions-text-body">
                <p>
                  {travel_directions_text_body_part_1[togglableLang]}
                  <a href="https://www.intercity.pl/en/"
                    target={isMobile ? "" : "_blank"}
                    rel={isMobile ? "" : "noreferrer"}>PKP Intercity</a>
                  {travel_directions_text_body_part_2[togglableLang]}
                </p>
              </div>
            </div>

            <div className="directions-text-col">
              <div className="directions-text-header">{travel_directions_text_2[togglableLang]}</div>
              <div className="directions-text-body">
                <p>
                  {travel_directions_text_body_3[togglableLang]}
                </p>
              </div>
            </div>

          </div>

          <div className="directions-text-row" style={{marginTop: isMobile ? 0: "70px"}}>
            <div className="directions-text-col">
              <div className="directions-text-header">{car_rental_title[togglableLang]}</div>
              <div className="directions-text-body">
                <p>
                  {togglableLang === 'EN' ? (
                    <>
                      If you prefer to rent a car during your stay in Poland, please note that an International Driving Permit (IDP) is required for non-EU driver's licenses. For US visitors, you can <a href="https://www.aaa.com/vacation/idpf.html" target="_blank" rel="noreferrer">obtain an IDP from AAA</a> before your trip.
                    </>
                  ) : togglableLang === 'PL' ? (
                    <>
                      Jeśli wolisz wynająć samochód podczas pobytu w Polsce, pamiętaj, że dla osób z prawem jazdy spoza UE wymagane jest Międzynarodowe Prawo Jazdy. Dla gości z USA, można <a href="https://www.aaa.com/vacation/idpf.html" target="_blank" rel="noreferrer">uzyskać je w AAA</a> przed podróżą.
                    </>
                  ) : (
                    <>
                      Si prefiere alquilar un coche durante su estancia en Polonia, tenga en cuenta que se requiere un Permiso Internacional de Conducir (IDP) para las licencias de conducir que no son de la UE. Para los visitantes de EE.UU., puede <a href="https://www.aaa.com/vacation/idpf.html" target="_blank" rel="noreferrer">obtener un IDP en AAA</a> antes de su viaje.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Map lang={togglableLang} />
        <div className="stay-container">
          <div className="stay-background-container" style={{
            backgroundImage: `url(https://i.imgur.com/VPyXk9t.png)`,
            backgroundSize: "cover",
            backgroundPosition: isMobile ? "0px" : "center",
            position: (isDoneAnimating || !isMobile) ? "relative" : "fixed",
          }}>
            <div className="stay-title">{stay_title[togglableLang]}</div>
          </div>
          <div className="stay-text-header">{stay_subtitle[togglableLang]}</div>
          <div className="stay-text-body">
            <p>
              {stay_text[togglableLang]}
            </p>
            <div className="address">
              ul. Grunwaldzka 15H
            </div>
            <div className="address">
              32-005 Niepołomice
            </div>
            <div style={{ margin: "20px 0 0 0" }}></div>
            <Button text={map_travel_link[togglableLang]}
              address={"https://maps.app.goo.gl/AHdmkP27noQbeqjm9"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelAndStay;