import "./Home.css";
import { useEffect, useState } from "react";
import CountDown from "../CountDown/CountDown";
import BouncingArrow from "../BouncingArrow/BouncingArrow";
import WeddingDetails from "../WeddingDetails/WeddingDetails";
import LinkBanner from "../LinkBanner/LinkBanner";
import JoinUsBanner from "../JoinUsBanner/JoinUsBanner";
import WhatsAppBanner from "../WhatsAppBanner/WhatsAppBanner";
import { isMobileDevice } from "../../assets/helper_functions";
import { useAppContext } from "../SubRoot/SubRoot";

const Home = () => {
  const [opacity, setOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const { lang } = useAppContext();

  const isPoland = (lang === "EN") || (lang === "PL");
  const isArgentina = lang === "SP";

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

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="poland-main-container">
      <div className="main-background-container" style={{
        backgroundImage: `url(https://i.imgur.com/8V7ir36.png)`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "right" : "center",
        opacity: opacity,
        transition: 'opacity 0.1s ease-out'
      }}>
        <div className="poland-home-content">
          <div className="poland-names-title">Mayra & Szymon</div>
          <CountDown lang={lang} />
          <BouncingArrow />
        </div>
      </div>
      <div className="poland-wedding-details">
        {isArgentina && <LinkBanner lang={lang} />}
        <WeddingDetails lang={lang} />
        <LinkBanner lang={lang} faq_banner={true} />
        {isPoland && <JoinUsBanner />}
        {isPoland && <LinkBanner lang={lang} />}
        {isPoland && <WhatsAppBanner />}
      </div>
    </div>
  );
}

export default Home;