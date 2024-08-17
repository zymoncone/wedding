import "./CountDown.css";
import React, { useState, useEffect } from 'react';
  const dates = {'Poland': `2025/08/19`,
                 'Argentina': `2025/02/15`};

  const days_by_language = {'Poland': ['dni', 'godz', 'min', 'sek'],
                            'Argentina': ['días', 'hs', 'min', 'seg']};

const CountDown = ({ country }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(dates[country]) - +new Date();
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
      <div className="full-count-container">
        <div className="count-container">
          <div className="count-text">{timeLeft.days}</div>
          <div className="subtext">{days_by_language[country][0]}</div>
        </div>
        <div className="count-container">
          <div className="count-text">{timeLeft.hours}</div>
          <div className="subtext">{days_by_language[country][1]}</div>
        </div>
        <div className="count-container">
          <div className="count-text">{timeLeft.minutes}</div>
          <div className="subtext">{days_by_language[country][2]}</div>
        </div>
        <div className="count-container">
          <div className="count-text">{timeLeft.seconds}</div>
          <div className="subtext">{days_by_language[country][3]}</div>
        </div>
      </div>
    </div>
  );
}

export default CountDown;