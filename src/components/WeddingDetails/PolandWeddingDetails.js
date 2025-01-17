import "./WeddingDetails.css";
import Button from "../Button/Button";
import DetailsBannerPoland from "../DetailsBannerPoland/DetailsBannerPoland";

const PolandWeddingDetails = () => {

  return (
    <div className="details-parent-container">
      <DetailsBannerPoland useDayOneSetup={true} />
      <div className="details-individual-container-poland">
        <h1 className="subtitle">Ceremony & Reception</h1>
        <div className="details-subtext-container">
          <div className="date-details-container">
            <p className="date-details-subtext">
              16:00
            </p>
          </div>
          <div className="address-details-container">
            <p className="address-details-subtext">
              Zamek Królewski w Niepołomicach
            </p>
            <p className="address-details-subtext">
              Zamkowa 2, 32-005
            </p>
            <p className="address-details-subtext">
              Niepołomice, Poland
            </p>
          </div>
        </div>
        <Button text={"Map"} address={"https://maps.app.goo.gl/CW57ZFBxmS2huGWp9"} />
        <div className="attire-details-container">
          <p className="attire-details-subtext">
            Attire: Black Tie Optional
          </p>
        </div>
      </div>
      <DetailsBannerPoland useDayOneSetup={false} />
      <div className="details-individual-container-poland">
        <h1 className="subtitle">BBQ & Drinks</h1>
        <div className="details-subtext-container">
          <div className="date-details-container">
            <p className="date-details-subtext">
              11:00
            </p>
          </div>
          <div className="address-details-container">
            <p className="address-details-subtext">
              Zamek Królewski w Niepołomicach
            </p>
            <p className="address-details-subtext">
              Zamkowa 2, 32-005
            </p>
            <p className="address-details-subtext">
              Niepołomice, Poland
            </p>
          </div>
        </div>
        <Button text={"Map"} address={"https://maps.app.goo.gl/CW57ZFBxmS2huGWp9"} />
        <div className="attire-details-container">
          <p className="attire-details-subtext">
            Attire: Smart Casual
          </p>
        </div>
      </div>
    </div>
  );
}

export default PolandWeddingDetails;