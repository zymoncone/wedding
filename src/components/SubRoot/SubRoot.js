import "./SubRoot.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import NavBarMobile from "../NavBarMobile/NavBarMobile";
import Footer from "../Footer/Footer";
import { MAX_NAV_WIDTH_MOBILE } from "../../assets/constants";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext); // Custom hook for consuming the context
}

const story_header = {
  'EN': "Our Story",
  'PL': "Nasza Historia",
  'SP': "Nuestra Historia"
};

const faq_header = {
  'EN': "FAQ",
  'PL': "FAQ",
  'SP': "Preguntas Frecuentes"
};

const SubRoot = ({ lang }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isDoneAnimating, setDoneAnimating] = useState(false);

  const location = useLocation();
  const isHome = (location.pathname.toLowerCase() === "/poland") ||
    (location.pathname.toLowerCase() === "/argentina");
  const isTravel = location.pathname.toLowerCase() === "/poland/travelandstay";
  const isOnBackground = isHome || isTravel;
  const navStyle = { color: isOnBackground ? "white" : "black" };
  const isPoland = (lang === "EN") || (lang === "PL");

  const rsvp_styling = {
    backgroundColor: isOnBackground ? "white" : "black",
    color: isOnBackground ? "black" : "white"
  }

  useEffect(() => {
    const handleResize = () => {
      if (isMobileDevice() || (window.innerWidth < MAX_NAV_WIDTH_MOBILE)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
    <div className="poland-root-container" id="top">
      {isMobile ? <NavBarMobile isOpen={isOpen} setOpen={setOpen} setDoneAnimating={setDoneAnimating} lang={lang} /> :
        <div className="nav-poland-container-desktop">
          <div className="nav-directory-container">
            {isHome ?
              <div className="date-header-rightside" style={navStyle}>
                {isPoland ? "23.AUG.2025" : "01.MAR.2025"}
              </div> :
              <div className="date-header-rightside">
                <Link to={``} style={navStyle}>♡</Link>
              </div>
            }
            <div className="nav-link-desktop">
              <Link to={`story`} style={navStyle}>{story_header[lang]}</Link>
            </div>
            {isPoland &&
              <>
                <div className="nav-link-desktop">
                  <Link to={`travelandstay`} style={navStyle}>Travel & Stay</Link>
                </div>
                <div className="nav-link-desktop">
                  <Link to={`blog`} style={navStyle}>Mayra's Blog</Link>
                </div>
                <div className="nav-link-desktop">
                  <Link to={`registry`} style={navStyle}>Registry</Link>
                </div>
              </>}
            <div className="nav-link-desktop">
              <Link to={`faq`} style={navStyle}>{faq_header[lang]}</Link>
            </div>

          </div>
          {isPoland &&
            <div className="rsvp-button-container">
              <Link to={`rsvp`} className="button-main" style={rsvp_styling}>
                <span>RSVP</span>
              </Link>
            </div>}
        </div>}
      <AppContext.Provider value={{ isDoneAnimating, lang }}>
        <Outlet />
      </AppContext.Provider>
      <Footer lang={lang} />
    </div>
  );
}

export default SubRoot;