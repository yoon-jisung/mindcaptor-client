import React, { useState, useEffect } from 'react';

export default function Timer({ min, sec, handleResult }) {
  const [minutes, setMinutes] = useState(parseInt(min));
  const [seconds, setSeconds] = useState(parseInt(sec));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          handleResult(); // 타이머가 0이 되면 결과창 오픈
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
