import "./RSVPButton.css";
import { Link } from "react-router-dom";

const RSVPButton = () => {

  const text = "RSVP";

  return (
    <Link to="/rsvp">
      <button className="button-23">{text}</button>
    </Link>
  );
}

export default RSVPButton;