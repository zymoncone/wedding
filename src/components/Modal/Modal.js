import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";

const Modal = ({ show, onClose, children, animate = true }) => {
  if (!show) {
    document.documentElement.style.overflow = "auto";
    return null;
  } else {
    document.documentElement.style.overflow = "hidden";
  }

  return (
    <div className={`modal-overlay ${animate ? "fade-in" : ""}`}>
      <div className={`modal ${animate ? "slide-in" : ""}`}>
        <IoCloseOutline className="close-button" onClick={onClose} />
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
