import "./WeddingDetails.css";
import Button from "../Button/Button";
import DetailsBanner from "../DetailsBanner/DetailsBanner";

const map_text = {
  "EN": "Map",
  "PL": "Mapa",
  "SP": "Mapa"
};

const first_banner_title = {
  "EN": "Ceremony & Reception",
  "PL": "Ceremonia i Przyjęcie",
  "SP": "1 de Marzo"
};

const first_banner_time = {
  "EN": "16:30",
  "PL": "16:30",
  "SP": "18:30"
};

const first_banner_address_top = {
  "EN": "Zamek Królewski w Niepołomicach",
  "PL": "Zamek Królewski w Niepołomicach",
  "SP": "Capilla Stella Montis"
};

const first_banner_address_mid = {
  "EN": "Zamkowa 2, 32-005",
  "PL": "Zamkowa 2, 32-005",
  "SP": "Villa Serranita"
};

const first_banner_address_bot = {
  "EN": "Niepołomice, Poland",
  "PL": "Niepołomice, Poland",
  "SP": "Argentina"
};

const first_banner_map = {
  "EN": "https://maps.app.goo.gl/CW57ZFBxmS2huGWp9",
  "PL": "https://maps.app.goo.gl/CW57ZFBxmS2huGWp9",
  "SP": "https://maps.app.goo.gl/mGDbtN5x7L8sUroq5"
};

const first_banner_attire = {
  "EN": "Attire: Black Tie Optional",
  "PL": "Strój: Czarny Krawat Opcjonalny",
  "SP": "Atuendo: Corbata Negra Opcional"
};

const second_banner_title = {
  "EN": "BBQ & Drinks",
  "PL": "Grill & Napoje",
  "SP": "1 de Marzo"
};

const second_banner_time = {
  "EN": "11:00",
  "PL": "11:00",
  "SP": "21:00"
};

const second_banner_map = {
  "EN": "https://maps.app.goo.gl/CW57ZFBxmS2huGWp9",
  "PL": "https://maps.app.goo.gl/CW57ZFBxmS2huGWp9",
  "SP": "https://maps.app.goo.gl/VfxasfaxYwMRRFXP9"
};

const second_banner_address_top = {
  "EN": "Zamek Królewski w Niepołomicach",
  "PL": "Zamek Królewski w Niepołomicach",
  "SP": "La Qunita Casona"
};

const second_banner_address_mid = {
  "EN": "Zamkowa 2, 32-005",
  "PL": "Zamkowa 2, 32-005",
  "SP": "Celso Barrios 3490"
};

const second_banner_address_bot = {
  "EN": "Niepołomice, Poland",
  "PL": "Niepołomice, Poland",
  "SP": "Córdoba, Argentina"
};

const second_banner_attire = {
  "EN": "Attire: Smart Casual",
  "PL": "Strój: Smart Casual",
  "SP": "Código de Vestimenta Formal"
};

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
            <Button text={map_text[lang]} address={first_banner_map[lang]} />
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
        <Button text={map_text[lang]} address={second_banner_map[lang]} />
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