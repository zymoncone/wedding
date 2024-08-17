import "./Poland.css";
import flowers from "../../media/Argentina/flowers.png";
import CountDown from "../CountDown/CountDown";
import Button from "../Button/Button";

const Poland = () => {
  return (
    <div className="poland">
      <div className="poland-title-container">
        <img src={flowers} alt="flowers" className="flowers-poland left"/>
        <h1 className="title-poland">Poland</h1>
        <img src={flowers} alt="flowers" className="flowers-poland"/>
      </div>
      <CountDown country={'Poland'}/>
      <div style={{margin: "2rem"}}></div>
      <Button />
    </div>
  );
}

export default Poland;