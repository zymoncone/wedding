import './WhatsAppBanner.css';
import whatsapp_banner from '../../media/Root/whatsapp-banner.png';
import { PiWhatsappLogoLight } from "react-icons/pi";

const WhatsAppBanner = () => {
  return (
    <div className="whatsapp-banner" style={{
      backgroundImage: `url(${whatsapp_banner})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
    }
    }>
      <div className="whatsapp-logo-container">
        <PiWhatsappLogoLight size={50} /> WhatsApp
      </div>
      <div className="whatsapp-text-container">
        <div className="whatsapp-text">Looking to stay up to date?</div>
        <div className="whatsapp-text">Join our WhatsApp group for announcements.</div>
      </div>
      <div className="join-whatsapp-button" role="button">
        <a href="https://chat.whatsapp.com/HzwxnPqVBa9LDwPyHx0bU6" target="_blank">
          Join Our WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WhatsAppBanner;