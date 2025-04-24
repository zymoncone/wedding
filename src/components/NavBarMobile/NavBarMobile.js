import "./NavBarMobile.css";
import { Pivot as Hamburger } from 'hamburger-react';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";
import { home_header_mobile_only,
         story_header,
         travel_header,
         blog_header,
         registry_header,
         faq_header,
         rsvp_header,
         date_header_mobile} from "../../assets/texts";

const NavBarMobile = ({ isOpen,
                        setOpen,
                        setDoneAnimating,
                        lang,
                        isPoland,
                        isOnBackground,
                        isHome }) => {
  const [height, setHeight] = useState("auto");
  const [navBarStyle, setNavBarStyle] = useState({});
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const location = useLocation();
  const isStory = (location.pathname.toLowerCase() === "/poland/story") ||
    (location.pathname.toLowerCase() === "/argentina/story");
  const isTravel = location.pathname.toLowerCase() === "/poland/travelandstay";
  const isRegistry = location.pathname.toLowerCase() === "/poland/registry";
  const isBlog = location.pathname.toLowerCase() === "/poland/blog";
  const isFAQ = (location.pathname.toLowerCase() === "/argentina/faq") ||
    (location.pathname.toLowerCase() === "/poland/faq");
  const navStyle = isOnBackground && isOpen ? "black" : (!isOnBackground ? "black" : "white");

  const menuOpenSettings = {
    backgroundColor: "#fff5ee",
    height: height,
    width: "100%"
  };

  const menuClosedSettings = {
    backgroundColor: "transparent",
    height: height,
    width: "100%"
  };

  useEffect(() => {
    const openNavBarStyle = { top: 0, position: "fixed", width: "90%" };

    if (!isOpen) {
      const timer = setTimeout(() => {
        setHeight("auto");
        setNavBarStyle({});
        setDoneAnimating(true);
        document.documentElement.style.overflow = 'auto';
      }, 400);

      return () => clearTimeout(timer);
    } else {
      setHeight("100vh");
      setNavBarStyle(openNavBarStyle);
      setDoneAnimating(false);
      document.documentElement.style.overflow = 'hidden';
    }
  }, [isOpen, setDoneAnimating, setNavBarStyle, setHeight]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`nav-poland-container-mobile ${isOpen ? 'open' : 'closed'}`} style={isOpen ? menuOpenSettings : menuClosedSettings}>

      <div className="navbar-mobile-container" style={navBarStyle}>
        <div className="nav-name-date-header">
          <span className="nav-link-mobile" onClick={() => setOpen(false)}>
            <Link to={``} className="nav-name-date-header-text" style={{ color: navStyle }}><span style={{ fontWeight: 400 }}>M&S</span> {date_header_mobile[lang]}</Link>
          </span>
        </div>
        <div className="nav-hamburger-container" style={{ color: navStyle }}>
          <Hamburger toggled={isOpen}
            toggle={setOpen}
            size={35}
            rounded
            duration={0.3}
            color={navStyle}
            distance={"lg"}
          />
        </div>
      </div>
      <div className="grid-rows-collapsible" style={isOpen ? { gridTemplateRows: "1fr" } : {}}>
        <div className="nav-link-mobile-container">
          <span className="nav-link-mobile" style={isHome ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
            <Link to={``} className="mobile-nav-link-text">{home_header_mobile_only[lang]}</Link>
          </span>
          <span className="nav-link-mobile" style={isStory ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
            <Link to={`story`} className="mobile-nav-link-text">{story_header[lang]}</Link>
          </span>
          {isPoland &&
            <>
              <span className="nav-link-mobile" style={isTravel ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
                <Link to={`travelandstay`} className="mobile-nav-link-text">{travel_header[lang]}</Link>
              </span>
              <span className="nav-link-mobile" style={isBlog ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
                <Link to={`blog`} className="mobile-nav-link-text">{blog_header[lang]}</Link>
              </span>
              <span className="nav-link-mobile" style={isRegistry ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
                <Link to={`registry`} className="mobile-nav-link-text">{registry_header[lang]}</Link>
              </span>
            </>}
          <span className="nav-link-mobile" style={isFAQ ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
            <Link to={`faq`} className="mobile-nav-link-text">{faq_header[lang]}</Link>
          </span>
          {isPoland &&
            <div className="rsvp-button-container-mobile" onClick={() => setOpen(false)}>
              <Link to={`rsvp`} className="button-main" style={{
                padding: "35px 45px",
                color: "white",
                backgroundColor: "black",
                fontSize: "25px"
              }}>
                <span>{rsvp_header[lang]}</span>
              </Link>
            </div>}
        </div>
      </div>
      {showScrollToTop && (
        <div className={`scroll-to-top-arrow ${showScrollToTop ? 'show' : ''}`} onClick={scrollToTop}>
          <SlArrowUp size={25} />
        </div>
      )}
    </div>
  );
}

export default NavBarMobile;