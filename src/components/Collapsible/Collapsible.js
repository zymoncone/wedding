import "./Collapsible.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Collapsible = (props) => {

  const [open, setOpen] = useState(false);

  const showContent = { gridTemplateRows: "1fr", marginBottom: "0.5rem" }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div key={props.idx}>
      <button className="toggle" onClick={handleOpen}>
        <div className="project-title">{props.heading}</div>
        <div className='dropdown-arrow'>
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </button>
      <div className="collapsible" style={open ? showContent : {}}>
      <div className="project-description">
        {props.children}
      </div>
      </div>
    </div>
  )
}

export default Collapsible