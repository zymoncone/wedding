import "./Root.css";
import Carousel from "../Carousel/Carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";

const Root = () => {
  const [isMobile, setIsMobile] = useState(false);
  const buttonStyling = {color: "black", width: "150px", padding: "25px 0"};

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <div className="home-background-container" style={{
      backgroundImage: `url(https://i.imgur.com/8V7ir36.png)`,
      backgroundSize: "cover",
      backgroundPosition: isMobile ? "right" : "center",
      transition: 'opacity 0.1s ease-in-out'
    }}>
      <div className="home-text-container">
        <Carousel />
        <div className="names-title">Mayra & Szymon</div>
        <div className="button-container">
          <Link to={`poland`} className="button-main margin-right" style={buttonStyling}>
            <span>Poland</span>
          </Link>
          <Link to={`argentina`} className="button-main" style={buttonStyling}>
            <span>Argentina</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Root;