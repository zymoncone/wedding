import "./SubRoot.css";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, createContext, useContext } from "react";
import { isMobileDevice } from "../../assets/helper_functions";
import NavBarMobile from "../NavBarMobile/NavBarMobile";
import Footer from "../Footer/Footer";
import { MAX_NAV_WIDTH_MOBILE } from "../../assets/constants";
import LangButton from "../LangButton/LangButton";
import NavBarDefault from "../NavBarDefault/NavBarDefault";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext); // Custom hook for consuming the context
};

const SubRoot = ({ lang }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isDoneAnimating, setDoneAnimating] = useState(false);
  const [togglableLang, setTogglableLang] = useState(lang);

  const location = useLocation();
  const isHome = (location.pathname.toLowerCase() === "/poland") ||
    (location.pathname.toLowerCase() === "/argentina");
  const isTravel = location.pathname.toLowerCase() === "/poland/travelandstay";
  const isOnBackground = isHome || isTravel;
  const isPoland = (lang === "EN") || (lang === "PL");

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
      {isMobile ?
        <NavBarMobile isOpen={isOpen}
                      setOpen={setOpen}
                      setDoneAnimating={setDoneAnimating}
                      lang={togglableLang}
                      isPoland={isPoland}
                      isOnBackground={isOnBackground}
                      isHome={isHome}
        /> :
        <NavBarDefault lang={togglableLang}
                       isPoland={isPoland}
                       isOnBackground={isOnBackground}
                       isHome={isHome}
        />}
      <AppContext.Provider value={{ isDoneAnimating, togglableLang }}>
        <Outlet />
      </AppContext.Provider>
      <Footer lang={togglableLang} />
      {isPoland &&
        <LangButton toggableLang={togglableLang}
                    setTogglableLang={setTogglableLang}
        />}
    </div>
  );
}

export default SubRoot;