import "./PolandMain.css";
import { useEffect, useState } from "react";
import background_main from "../../media/Root/background-desktop.png";
import CountDown from "../CountDown/CountDown";
import BouncingArrow from "../BouncingArrow/BouncingArrow";
import PolandWeddingDetails from "../WeddingDetails/PolandWeddingDetails";
import GalleryTitle from "../GalleryTitle/GalleryTitle";
import Gallery from "../Gallery/Gallery";
import OurStoryBanner from "../OurStoryBanner/OurStoryBanner";
import JoinUsBanner from "../JoinUsBanner/JoinUsBanner";
import Footer from "../Footer/Footer";
import WhatsAppBanner from "../WhatsAppBanner/WhatsAppBanner";

const PolandMain = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const newOpacity = Math.max(1 - scrollTop / windowHeight, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="poland-main-container">
      <div className="home-background-container" style={{
        backgroundImage: `url(${background_main})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: opacity,
        transition: 'opacity 0.1s ease-out'
      }}>
        <div className="poland-home-content">
          <div className="poland-names-title">Mayra & Szymon</div>
          <CountDown country={'Poland'} />
          <BouncingArrow />
        </div>
      </div>
      <div className="poland-wedding-details">
        <PolandWeddingDetails />
        <OurStoryBanner />
        <JoinUsBanner />
        <WhatsAppBanner />
        <Footer />
      </div>
    </div>
  );
}

export default PolandMain;