import "./Argentina.css";
import flowers from "../../media/Argentina/flowers.png";
import CountDown from "../CountDown/CountDown";
import RSVPButton from "../RSVPButton/RSVPButton";
import GalleryTitle from "../GalleryTitle/GalleryTitle";
import Gallery from "../Gallery/Gallery";
import ArgentinaWeddingDetails from "../WeddingDetails/ArgentinaWeddingDetails";
import Footer from "../Footer/Footer";
import BouncingArrow from "../BouncingArrow/BouncingArrow";

const Argentina = () => {
  return (
    <div className="argentina">
      <div className="argentina-homepage-container">
      <div className="argentina-title-container">
        <img src={flowers} alt="flowers" className="flowers-argentina left"/>
        <h1 className="title-argentina">Argentina</h1>
        <img src={flowers} alt="flowers" className="flowers-argentina"/>
      </div>
      <CountDown country={'Argentina'}/>
      <div style={{margin: "2rem"}}></div>
      <RSVPButton />
      <BouncingArrow />
      </div>
      <ArgentinaWeddingDetails />
      <GalleryTitle title={"Nosotros..."} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Argentina;