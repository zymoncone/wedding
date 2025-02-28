import "./CountDown.css";
import React, { useState, useEffect } from 'react';

const dates = {
  'PL': `2025/08/23 16:30:00`,
  'EN': `2025/08/23 16:30:00`,
  'SP': `2025/03/01 21:00:00`
};

const days_by_language = {
  'PL': ['dni', 'godz', 'min', 'sek'],
  'EN': ['days', 'hrs', 'min', 'sec'],
  'SP': ['días', 'hs', 'min', 'seg']
};

const end_of_time_message = {
  'PL': 'Zaczynamy!',
  'EN': 'Let\'s party!',
  'SP': '¡A full con la fiesta!'
};

const CountDown = ({ lang }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(dates[lang]) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className='count-down'>
      {Object.keys(timeLeft).length > 0 ? <div className="full-count-container">
        <div className="count-container">
          <div className="count-text">{timeLeft.days}</div>
          <div className="subtext">{days_by_language[lang][0]}</div>
        </div>
        <div className="count-container">
          <div className="count-text">{timeLeft.hours}</div>
          <div className="subtext">{days_by_language[lang][1]}</div>
        </div>
        <div className="count-container">
          <div className="count-text">{timeLeft.minutes}</div>
          <div className="subtext">{days_by_language[lang][2]}</div>
        </div>
        <div className="count-container">
          <div className="count-text">{timeLeft.seconds}</div>
          <div className="subtext">{days_by_language[lang][3]}</div>
        </div>
      </div> :
        <div className="count-container">
          <div className="count-text">{end_of_time_message[lang]}</div>
        </div>}
    </div>
  );
}

export default CountDown;