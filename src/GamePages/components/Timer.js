import React, { useState, useEffect } from 'react';

export default function Timer({ mm, ss }) {
  const [minutes, setMinutes] = useState(parseInt(3));
  const [seconds, setSeconds] = useState(parseInt(0));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  return (
    <span className="timer">
      <h1>Timer</h1>
      <div className="timer_num">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </span>
  );
}
