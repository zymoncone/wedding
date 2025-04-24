import "./WeddingDetails.css";
import Button from "../Button/Button";
import DetailsBanner from "../DetailsBanner/DetailsBanner";
import {
  first_banner_title,
  first_banner_time,
  first_banner_address_top,
  first_banner_address_mid,
  first_banner_address_bot,
  first_banner_map,
  first_banner_attire,
  second_banner_title,
  second_banner_time,
  second_banner_address_top,
  second_banner_address_mid,
  second_banner_address_bot,
  second_banner_map,
  second_banner_attire,
  map_travel_link,
} from "../../assets/texts";

const WeddingDetails = ({ lang }) => {

  const isPoland = (lang === "PL") || (lang === "EN");

  return (
    <div className="details-parent-container">
      {isPoland &&
        <>
          <DetailsBanner useDayOneSetup={true} lang={lang} />
          <div className="details-individual-container-poland">
            <h1 className="subtitle">{first_banner_title[lang]}</h1>
            <div className="details-subtext-container">
              <div className="date-details-container">
                <p className="date-details-subtext">
                  {first_banner_time[lang]}
                </p>
              </div>
              <div className="address-details-container">
                <p className="address-details-subtext">
                  {first_banner_address_top[lang]}
                </p>
                <p className="address-details-subtext">
                  {first_banner_address_mid[lang]}
                </p>
                <p className="address-details-subtext">
                  {first_banner_address_bot[lang]}
                </p>
              </div>
            </div>
            <Button text={map_travel_link[lang]} address={first_banner_map[lang]} />
            <div className="attire-details-container">
              <p className="attire-details-subtext">
                {first_banner_attire[lang]}
              </p>
            </div>
          </div>
        </>}
      <DetailsBanner useDayOneSetup={false} lang={lang} />
      <div className="details-individual-container-poland">
        <h1 className="subtitle">{second_banner_title[lang]}</h1>
        <div className="details-subtext-container">
          <div className="date-details-container">
            <p className="date-details-subtext">
              {second_banner_time[lang]}
            </p>
          </div>
          <div className="address-details-container">
            <p className="address-details-subtext">
              {second_banner_address_top[lang]}
            </p>
            <p className="address-details-subtext">
              {second_banner_address_mid[lang]}
            </p>
            <p className="address-details-subtext">
              {second_banner_address_bot[lang]}
            </p>
          </div>
        </div>
        <Button text={map_travel_link[lang]} address={second_banner_map[lang]} />
        {isPoland && <div className="attire-details-container">
          <p className="attire-details-subtext">
            {second_banner_attire[lang]}
          </p>
        </div>}
      </div>
    </div>
  );
}

export default WeddingDetails;