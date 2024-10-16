import "./Poland.css";
import flowers from "../../media/Argentina/flowers.png";
import CountDown from "../CountDown/CountDown";
import RSVPButton from "../RSVPButton/RSVPButton";
import GalleryTitle from "../GalleryTitle/GalleryTitle";
import Gallery from "../Gallery/Gallery";
import PolandWeddingDetails from "../WeddingDetails/PolandWeddingDetails";
import Footer from "../Footer/Footer";
import BouncingArrow from "../BouncingArrow/BouncingArrow";

const Poland = () => {
  return (
    <div className="poland">
      <div className="poland-homepage-container">
        <div className="poland-title-container">
          <img src={flowers} alt="flowers" className="flowers-poland left"/>
          <h1 className="title-poland">Poland</h1>
          <img src={flowers} alt="flowers" className="flowers-poland"/>
        </div>
        <CountDown country={'Poland'}/>
        <div style={{margin: "2rem"}}></div>
        <RSVPButton />
        <BouncingArrow />
      </div>
      <PolandWeddingDetails />
      <GalleryTitle title={"Us..."} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Poland;