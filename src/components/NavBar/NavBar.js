import "./NavBar.css";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import homeBackground from "../../media/Home/home-background.png";

const NavBar = () => {

  const [onHomePage, setOnHomePage] = useState(true);

  let background = onHomePage ? `url(${homeBackground})` : "";

  useEffect(() => {
    console.log(onHomePage);
  }, [onHomePage]);

  return (
    <div className="app-container" style={{backgroundImage: background}}>
      <div className="nav-bar">
        <div className="nav-button" onClick={() => setOnHomePage(false)}>
          <Link to="/poland">
            <span className="text">&nbsp;&nbsp;&nbsp;poland</span>
          </Link>
        </div>
        <div className="nav-button" onClick={() => setOnHomePage(true)}>
          <Link to="/"><span className="text"><FaHeart /></span></Link>
        </div>
        <div className="nav-button" onClick={() => setOnHomePage(false)}>
          <Link to="/argentina"><span className="text">argentina</span></Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
};

export default NavBar;