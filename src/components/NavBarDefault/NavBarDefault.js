import "./NavBarDefault.css";
import { date_header,
         story_header,
         travel_header,
         blog_header,
         registry_header,
         faq_header,
         rsvp_header } from "../../assets/texts";
import { Link } from "react-router-dom";

const NavBarDefault = ({ lang, isPoland, isOnBackground, isHome }) => {
  const navStyle = { color: isOnBackground ? "white" : "black" };

  const rsvp_styling = {
      backgroundColor: isOnBackground ? "white" : "black",
      color: isOnBackground ? "black" : "white"
    };

  return (
    <div className="nav-poland-container-desktop">
      <div className="nav-directory-container">
        {isHome ?
          <div className="date-header-rightside" style={navStyle}>
            {date_header[lang]}
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
              <Link to={`travelandstay`} style={navStyle}>{travel_header[lang]}</Link>
            </div>
            <div className="nav-link-desktop">
              <Link to={`blog`} style={navStyle}>{blog_header[lang]}</Link>
            </div>
            <div className="nav-link-desktop">
              <Link to={`registry`} style={navStyle}>{registry_header[lang]}</Link>
            </div>
          </>}
        <div className="nav-link-desktop">
          <Link to={`faq`} style={navStyle}>{faq_header[lang]}</Link>
        </div>

      </div>
      {isPoland &&
        <div className="rsvp-button-container">
          <Link to={`rsvp`} className="button-main" style={rsvp_styling}>
            <span>{rsvp_header[lang]}</span>
          </Link>
        </div>}
    </div>
  );
}

export default NavBarDefault;