import "./Poland.css";
import flowers from "../../media/Argentina/flowers.png";
import CountDown from "../CountDown/CountDown";
import RSVPButton from "../RSVPButton/RSVPButton";

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
      <RSVPButton />
    </div>
  );
}

export default Poland;