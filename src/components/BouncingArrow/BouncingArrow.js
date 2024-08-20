import "./BouncingArrow.css";
import { SlArrowDown } from "react-icons/sl";

const BouncingArrow = () => {

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bouncing-arrow-container" onClick={handleClick}>
      <SlArrowDown className="bouncing-arrow"/>
    </div>
  );
}

export default BouncingArrow;