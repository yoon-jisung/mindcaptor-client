import React from 'react';

export default function GameStartBtn({ handleGameStart }) {
  return (
    <div>
      <button className="gameStart" onClick={handleGameStart}>
        게임시작
      </button>
    </div>
  );
}
