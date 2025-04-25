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
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const Home = () => {
  const [opacity, setOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const { togglableLang } = useAppContext();

  const isPoland = togglableLang === "EN" || togglableLang === "PL";
  const isArgentina = togglableLang === "SP";

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const newOpacity = Math.max(1 - scrollTop / windowHeight, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <div
        className="main-background-container"
        style={{
          backgroundImage: `url(https://i.imgur.com/8V7ir36.png)`,
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "right" : "center",
          opacity: opacity,
          transition: "opacity 0.1s ease-out",
        }}
      >
        <div className="poland-home-content">
          <div className="poland-names-title">Mayra & Szymon</div>
          <CountDown lang={togglableLang} />
          <BouncingArrow />
        </div>
      </div>
      <div className="poland-wedding-details">
        {isArgentina && (
          <ScrollAnimation>
            <LinkBanner lang={togglableLang} />
          </ScrollAnimation>
        )}

        <WeddingDetails lang={togglableLang} />

        <ScrollAnimation delay={300}>
          <LinkBanner lang={togglableLang} faq_banner={true} />
        </ScrollAnimation>

        {isPoland && (
          <ScrollAnimation delay={400}>
            <JoinUsBanner lang={togglableLang} />
          </ScrollAnimation>
        )}

        {isPoland && (
          <ScrollAnimation delay={500}>
            <LinkBanner lang={togglableLang} />
          </ScrollAnimation>
        )}

        {isPoland && (
          <ScrollAnimation delay={600}>
            <WhatsAppBanner lang={togglableLang} />
          </ScrollAnimation>
        )}
      </div>
    </div>
  );
};

export default Home;
