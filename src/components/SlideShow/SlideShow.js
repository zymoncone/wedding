
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { GoXCircleFill } from "react-icons/go";
import { useEffect, useState } from 'react'
import "./SlideShow.css"
import DisplayImage from "../Display/DisplayImage"

const SlideShow = (props) => {

  const [slide, setSlide] = useState(0);
  const [mutliSlides, setMultiSlides] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const preventDoubleClick = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      setTimeout(() => setIsDisabled(false), 100); // Re-enable after 100ms
    }
  };

  const nextSlide = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      setSlide(slide === (props.entry.length - 1) ? 0 : (slide + 1))
      preventDoubleClick();
    }
  }

  const prevSlide = (e) => {
    e.preventDefault();
    if (!isDisabled) {
      setSlide(slide === 0 ? (props.entry.length - 1) : (slide - 1));
      preventDoubleClick();
    }
  }

  useEffect(() => {
    if (props.entry.length === 1) {
      setMultiSlides(false)
    }
  },[props.entry])

  useEffect(() => {
    setSlide(props.activeSlide)
  }, [props.activeSlide])

  return (
  <div className="slide-show-container" style={{opacity: props.opacity}}>
  <GoXCircleFill className="x-circle" onClick={props.handleClose} />
  <div key={props.idx} className="slide-show">
    {mutliSlides && <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} disabled={isDisabled}/>}
      {props.entry.map((src, idx) => {
        return(
          <DisplayImage key={idx} source={src} index={idx} slide={slide} />
        )
      })}
    {mutliSlides && <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} disabled={isDisabled}/>}
    {mutliSlides && <span className="slide-selections">
      {props.entry.map((_, idx) => {
        return (
          <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "selection" : "selection selection-inactive"}></button>
        )
        })
      }
    </span>}
  </div>
  </div>
  )
}

export default SlideShow