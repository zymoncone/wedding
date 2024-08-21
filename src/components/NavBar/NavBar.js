import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { isMobileDevice } from "../../assets/helper_functions";
import background_main from "../../media/Home/background-main.png";
import background_mobile from "../../media/Home/canoe-background.jpg";

const NavBar = () => {

  const [onHomePage, setOnHomePage] = useState(true);
  const [background, setBackground] = useState(`url(${background_mobile})`);
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    if (isMobileDevice() && onHomePage) {
      setBackground(`url(${background_mobile})`);
    } else if (!isMobileDevice() && onHomePage) {
      setBackground(`url(${background_main})`);
    } else {
      setBackground("");
    }

    if (onHomePage) {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
  }, [onHomePage]);

  return (
    <div className="app-container" style={{backgroundImage: background}}>
      <div className="nav-bar">
        <div className="nav-button" onClick={() => setOnHomePage(false)}>
          <Link to="/poland">
            <span className="text" style={{color: textColor}}>&nbsp;&nbsp;&nbsp;poland</span>
          </Link>
        </div>
        <div className="nav-button" onClick={() => setOnHomePage(true)}>
          <Link to="/"><span className="text" style={{color: textColor}}><FaHeart /></span></Link>
        </div>
        <div className="nav-button" onClick={() => setOnHomePage(false)}>
          <Link to="/argentina"><span className="text" style={{color: textColor}}>argentina</span></Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default NavBar;