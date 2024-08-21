import './Carousel.css';
import React, { useState, useEffect } from 'react';

const texts = ['We\'re getting married!',
               '¡Nos casamos!',
               'Bierzemy ślub!'];

const Carousel = () => {

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const element = document.querySelector('.carousel-text');
    
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);

      // Fade out
      element.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 2500, // half of your interval
        fill: 'forwards'
      });

      // Wait for half of the interval, then fade in
      setTimeout(() => {
        element.animate([
          { opacity: 1 },
          { opacity: 0 }
        ], {
          duration: 2500, // half of your interval
          fill: 'forwards'
        });
      }, 2500);

    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [textIndex]);

  return (
    <div className='carousel-text'>
      {texts[textIndex]}
    </div>
  );
}

export default Carousel;