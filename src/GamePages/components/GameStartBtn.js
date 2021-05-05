import React from 'react';

export default function GameStartBtn({ handleGameStart, isInGame }) {
  return (
    <div>
      <button
        style={{ display: isInGame ? '' : 'none' }}
        className="gameStart"
        onClick={handleGameStart}
      >
        게임시작
      </button>
    </div>
  );
}
