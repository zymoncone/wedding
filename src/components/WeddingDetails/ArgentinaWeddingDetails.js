import "./WeddingDetails.css";
import { GiBridge } from "react-icons/gi";
import { PiCheersDuotone } from "react-icons/pi";
import Button from "../Button/Button";

const ArgentinaWeddingDetails = () => {
  return (
    <div className="details-parent-container">
      <div className="details-individual-container">
        <GiBridge className="ceremony-icon"/>
        <h1 className="subtitle">Ceremonia</h1>
        <div className="details-subtext-container">
          <p className="details-subtext">
            15 de febrero de 2025 a las 19:00 hs
            en la ... debajo las indicaciones para llegar.
          </p>
        </div>
        <Button text={"Llegar a la ceremonia"} />
      </div>
      <div className="details-individual-container">
        <PiCheersDuotone className="cheers-icon"/>
        <h1 className="subtitle">Fiesta</h1>
        <div className="details-subtext-container">
          <p className="details-subtext">
            Luego de la ceremonia festejaremos
            en Cordoba.
          </p>
          <p className="details-subtext">¡Te esperamos!</p>
        </div>
        <Button text={"Llegar a la fiesta"} />
      </div>
    </div>
  );
}

export default ArgentinaWeddingDetails;