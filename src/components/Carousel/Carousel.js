import './Carousel.css';
import React, { useState, useEffect } from 'react';

const texts = ['We\'re getting married!',
               '¡Nos casamos!',
               'Bierzemy ślub!'];

const Carousel = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % texts.length);
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