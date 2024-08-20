
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { GoXCircleFill } from "react-icons/go";
import { useEffect, useState } from 'react'
import "./SlideShow.css"
import DisplayImage from "../Display/DisplayImage"

const SlideShow = (props) => {

  const [slide, setSlide] = useState(0)
  const [mutliSlides, setMultiSlides] = useState(true)

  const nextSlide = (e) => {
    e.preventDefault()
    setSlide(slide === (props.entry.length - 1) ? 0 : (slide + 1))
  }

  const prevSlide = (e) => {
    e.preventDefault()
    setSlide(slide === 0 ? (props.entry.length - 1) : (slide - 1))
  }

  useEffect(() => {
    if (props.entry.length === 1) {
      setMultiSlides(false)
    }
  },[props.entry])

  useEffect(() => {
    console.log("setting prop", props.activeSlide)
    setSlide(props.activeSlide)
  }, [props.activeSlide])

  return (
  <div className="slide-show-container">
  <GoXCircleFill className="x-circle" onClick={props.handleClose} />
  <div key={props.idx} className="slide-show">
    {mutliSlides && <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>}
      {props.entry.map((src, idx) => {
        return(
          <DisplayImage key={idx} source={src} index={idx} slide={slide} />
        )
      })}
    {mutliSlides && <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>}
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