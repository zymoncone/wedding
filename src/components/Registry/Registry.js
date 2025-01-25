import "./Registry.css";
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import { useAppContext } from "../SubRoot/SubRoot";

const Registry = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { isDoneAnimating } = useAppContext();

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
          Many of you are traveling across the globe to
          celebrate with us, so your presence
          means the world to us and is all we ask for. If you'd
          still like to contribute to our registry or honeymoon funds,
          please use the link below.
        </div>
        <div className="button-main" style={{ width: "200px", padding: "25px 0", margin: 0, fontFamily: "'Newsreader', serif", fontSize: "20px" }}>
          Coming Soon!
        </div>
      </div>
    </div>
  );
}

export default Registry;