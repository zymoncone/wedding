import "./Home.css";
import Logo from "../../media/Home/MayraSzymonLogo.png";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  return (
    <div className="home-container" >
      <img src={Logo} alt="logo" className="logo"/>
      <Carousel />
    </div>
  )
}

export default Home;