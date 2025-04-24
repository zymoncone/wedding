import "./Registry.css";
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import { useAppContext } from "../SubRoot/SubRoot";

const registry_text = {
  "EN": "Many of you are traveling across the globe to celebrate with us, so your presence means the world to us and is all we ask for. If you'd still like to contribute to our registry or honeymoon funds, please use the link below.",
  "PL": "Wielu z Was przemierza cały świat, aby świętować ten wyjątkowy dzień razem z nami – Wasza obecność ma dla nas ogromne znaczenie i jest wszystkim, o co prosimy. Jeśli jednak chcielibyście wesprzeć naszą listę prezentów lub fundusz podróży poślubnej, prosimy o skorzystanie z poniższego linku."
};

const registry_button_text = {
  "EN": "Our Registry",
  "PL": "Nasza Lista Prezentów"
};

const Registry = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { isDoneAnimating, togglableLang } = useAppContext();

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="registry-container">
      <div className="registry-background-container" style={{
        backgroundImage: `url(https://i.imgur.com/KJ2CfSV.png)`,
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "right" : "top",
        position: (isDoneAnimating || !isMobile) ? "relative" : "fixed",
        opacity: (isDoneAnimating || !isMobile) ? 1 : 0,
      }}>
        <div className="registry-text">
          {registry_text[togglableLang]}
        </div>
        <a className="button-main"
          href="https://www.theknot.com/us/mayra-oyola-and-szymon-sarnowicz-aug-2025/registry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{registry_button_text[togglableLang]}</span>
        </a>
      </div>
    </div>
  );
}

export default Registry;