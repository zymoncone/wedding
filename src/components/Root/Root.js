import "./Root.css";
import Carousel from "../Carousel/Carousel";
import background_main from "../../media/Root/background-desktop.png";
import { Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="home-background-container" style={{
      backgroundImage: `url(${background_main})`,
      backgroundSize: "cover",
      minHeight: "100vh",
    }}>
      <div className="home-text-container">
        <Carousel />
        <div className="names-title">Mayra & Szymon</div>
        <div className="button-container">
          <Link to={`poland`} className="button-main margin-right" style={{color: "black"}}>
            <span>Poland</span>
          </Link>
          <Link to={`argentina`} className="button-main" style={{color: "black"}}>
            <span>Argentina</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Root;