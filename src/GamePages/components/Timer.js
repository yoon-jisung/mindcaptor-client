import React from 'react';

export default function Timer({ minutes, seconds, handleAnswer }) {
  return (
    <span className="timer">
      <h1>Timer</h1>
      <div className="timer_num">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </span>
  );
}
