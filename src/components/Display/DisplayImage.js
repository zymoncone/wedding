import "./Display.css"

const DisplayImage = ({
                       source,
                       index,
                       slide}) => {

  return (<img src={source} 
               className={slide === index ? "slide" : "slide slide-hidden"} 
               alt={index} 
               key={index} />)
}

export default DisplayImage