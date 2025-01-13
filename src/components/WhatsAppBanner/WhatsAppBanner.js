import './WhatsAppBanner.css';
import { PiWhatsappLogoLight } from "react-icons/pi";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";

const WhatsAppBanner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);


  return (
    <div className="whatsapp-banner">
      <PiWhatsappLogoLight size={700} className="whatsapp-logo-background" />
      <div className="whatsapp-logo-container">
        <PiWhatsappLogoLight size={50} /> WhatsApp
      </div>
      <div className="whatsapp-text-container">
        <div className="whatsapp-text">Looking to stay up to date?</div>
        <div className="whatsapp-text">Join our WhatsApp group for announcements.</div>
      </div>
      <div className="join-whatsapp-button" role="button">
        <a href="https://chat.whatsapp.com/HzwxnPqVBa9LDwPyHx0bU6" target={isMobile ? "" : "_blank"} rel={isMobile ? "" : "noreferrer"}>
          Join Our WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WhatsAppBanner;