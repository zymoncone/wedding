import "./PolandRoot.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import NavBarMobile from "../NavBarMobile/NavBarMobile";
import Footer from "../Footer/Footer";

const PolandRoot = () => {
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/poland";
  const navStyle = {color: isHome ? "white" : "black"};

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="poland-root-container" id="poland-root">
      {isMobile ? <NavBarMobile /> :
      <div className="nav-poland-container-desktop">
        <div className="nav-directory-container">
          <div className="our-story">
            <Link to={`story`} style={navStyle}>Our Story</Link>
          </div>
          <div className="wedding-details">
            <Link to={`travelandstay`} style={navStyle}>Travel & Stay</Link>
          </div>
          <div className="registry">
            <Link to={`registry`} style={navStyle}>Registry</Link>
          </div>
        </div>
        {isHome ?
          <div className="date-header" style={navStyle}>
            23.AUG.2025
          </div> :
          <div className="date-header">
            <Link to={``} style={navStyle}>♡</Link>
          </div>
        }
        <div className="rsvp-button-container">
          <Link to={`rsvp`} className="button-main" style={{width: "100px", padding: "25px 0", margin: 0, fontFamily: "'Newsreader', serif", fontSize: "20px"}}>
            <span>RSVP</span>
          </Link>
        </div>
      </div>}
      <Outlet />
      <Footer />
    </div>
  );
}

export default PolandRoot;