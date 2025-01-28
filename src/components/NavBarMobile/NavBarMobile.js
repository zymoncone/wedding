import "./NavBarMobile.css";
import { Pivot as Hamburger } from 'hamburger-react';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Link_1 = { "EN": "Wedding", "PL": "Wesela", "SP": "El Casamiento" };
const Link_2 = { "EN": "Our Story", "PL": "Nasza Historia", "SP": "Nuestra Historia" };
const Link_3 = { "EN": "Travel & Stay", "PL": "Podróż i Zakwaterowanie", "SP": "Viaje y Estadía" };
const Link_4 = { "EN": "Mayra's Blog", "PL": "Blog Mayry", "SP": "Blog de Mayra" };
const Link_5 = { "EN": "Registry", "PL": "Rejestr", "SP": "Registro" };
const Link_6 = { "EN": "FAQ", "PL": "FAQ", "SP": "Preguntas Frecuentes" };

const NavBarMobile = ({ isOpen, setOpen, setDoneAnimating, lang }) => {
  const [height, setHeight] = useState("auto");
  const [navBarStyle, setNavBarStyle] = useState({});

  const location = useLocation();
  const isHome = (location.pathname === "/poland") ||
    (location.pathname === "/argentina");
  const isStory = (location.pathname === "/poland/story") ||
    (location.pathname === "/argentina/story");
  const isTravel = location.pathname === "/poland/travelandstay";
  const isRegistry = location.pathname === "/poland/registry";
  const isBlog = location.pathname === "/poland/blog";
  const isFAQ = (location.pathname === "/argentina/faq") ||
    (location.pathname === "/poland/faq");
  const isOnBackground = isHome || isTravel;
  const navStyle = isOnBackground && isOpen ? "black" : (!isOnBackground ? "black" : "white");
  const isPoland = (lang === "EN") || (lang === "PL");

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
      }, 400);


      return () => clearTimeout(timer);
    } else {
      setHeight("100vh");
      setNavBarStyle(openNavBarStyle);
      setDoneAnimating(false);
    }
  }, [isOpen, setDoneAnimating, setNavBarStyle, setHeight]);

  return (
    <div className="nav-poland-container-mobile" style={isOpen ? menuOpenSettings : menuClosedSettings}>
      <div className="navbar-mobile-container" style={navBarStyle}>
        <div className="nav-name-date-header">
          <span className="nav-link-mobile" onClick={() => setOpen(false)}>
            <Link to={``} className="nav-name-date-header-text" style={{ color: navStyle }}><span style={{ fontWeight: 400 }}>M&S</span> {isPoland ? "23.AUG.25" : "01.MAR.25"}</Link>
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
            <Link to={``} className="mobile-nav-link-text">{Link_1[lang]}</Link>
          </span>
          <span className="nav-link-mobile" style={isStory ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
            <Link to={`story`} className="mobile-nav-link-text">{Link_2[lang]}</Link>
          </span>
          {isPoland &&
            <>
              <span className="nav-link-mobile" style={isTravel ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
                <Link to={`travelandstay`} className="mobile-nav-link-text">{Link_3[lang]}</Link>
              </span>
              <span className="nav-link-mobile" style={isBlog ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
                <Link to={`blog`} className="mobile-nav-link-text">{Link_4[lang]}</Link>
              </span>
              <span className="nav-link-mobile" style={isRegistry ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
                <Link to={`registry`} className="mobile-nav-link-text">{Link_5[lang]}</Link>
              </span>
            </>}
          <span className="nav-link-mobile" style={isFAQ ? { textDecoration: "underline" } : {}} onClick={() => setOpen(false)}>
            <Link to={`faq`} className="mobile-nav-link-text">{Link_6[lang]}</Link>
          </span>
          {isPoland &&
            <div className="rsvp-button-container-mobile" onClick={() => setOpen(false)}>
              <Link to={`rsvp`} className="button-main" style={{
                padding: "35px 45px",
                color: "white",
                backgroundColor: "black",
                fontSize: "25px"
              }}>
                <span>RSVP</span>
              </Link>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default NavBarMobile;