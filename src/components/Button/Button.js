import "./Button.css";
import { useState, useEffect } from "react";
import { isMobileDevice } from "../../assets/helper_functions";

const Button = ({text, address=""}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (isMobile) {
      window.open(address, "_self");
    } else {
      window.open(address, "_blank");
    }
  };

  return (
      <a className="button-60" href={address} onClick={handleClick}>{text}</a>
  );
}

export default Button;