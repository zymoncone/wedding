import './Carousel.css';
import React, { useState, useEffect } from 'react';

const texts = ['We\'re getting married!',
               '¡Nos casamos!',
               'Bierzemy ślub!'];

const Carousel = () => {

  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFade(true);
      }, 500); // Duration of the fade-out transition
    }, 2500); // Interval for text change

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`carousel-text ${fade ? 'fade-in' : 'fade-out'}`}>
      {texts[textIndex]}
    </div>
  );
}

export default Carousel;