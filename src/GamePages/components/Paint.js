import React from 'react';

export default function Paint({ drawBtn, reset, eraserBtn }) {
  return (
    <div>
      <button className="draw" onClick={drawBtn}>
        그리기
      </button>
      <button className="reset" onClick={reset}>
        초기화
      </button>
      <button className="eraser" onClick={eraserBtn}>
        지우개
      </button>
    </div>
  );
}
