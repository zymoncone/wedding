import "./WeddingDetails.css";
import { PiCastleTurretDuotone } from "react-icons/pi";
import { PiCheersDuotone } from "react-icons/pi";
import Button from "../Button/Button";

const PolandWeddingDetails = () => {

  const detailsFontAdjustment = {"fontSize":"1.2rem"};
  const addressFontAdjustment = {"fontSize":"1.2rem", "fontStyle":"italic"};

  return (
    <div className="details-parent-container">
      <div className="details-individual-container-poland">
        <div className="ceremony-icon-container">
          <PiCastleTurretDuotone className="castle-icon"/>
          <PiCheersDuotone className="cheers-icon-poland"/>
        </div>
        <h1 className="subtitle">Ceremony & Reception</h1>
        <div className="details-subtext-container">
          <p className="details-subtext" style={detailsFontAdjustment}>
            August 23, 2025 at 17:00
          </p>
          <p className="details-address-subtext" style={detailsFontAdjustment}>
            Zamek Królewski w Niepołomicach
          </p>
          <p className="details-address-subtext" style={addressFontAdjustment}>
            Zamkowa 2, 32-005 <br/> Niepołomice, Poland
          </p>
          <p className="details-subtext" style={detailsFontAdjustment}>
            Attire: Black Tie Optional
          </p>
        </div>
        <Button text={"Location Details"} address={"https://maps.app.goo.gl/CW57ZFBxmS2huGWp9"}/>
      </div>
    </div>
  );
}

export default PolandWeddingDetails;