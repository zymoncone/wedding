import "./Argentina.css";
import flowers from "../../media/Argentina/flowers.png";
import CountDown from "../CountDown/CountDown";
import Button from "../Button/Button";

const Argentina = () => {
  return (
    <div className="argentina">
      <div className="argentina-title-container">
        <img src={flowers} alt="flowers" className="flowers-argentina left"/>
        <h1 className="title-argentina">Argentina</h1>
        <img src={flowers} alt="flowers" className="flowers-argentina"/>
      </div>
      <CountDown country={'Argentina'}/>
      <div style={{margin: "2rem"}}></div>
      <Button />
    </div>
  );
}

export default Argentina;