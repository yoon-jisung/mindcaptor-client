import React from 'react';

export default function Paint({ reset, eraserBtn }) {
  return (
    <div className="Paint">
      <button className="reset" onClick={reset}>
        초기화
      </button>
      <button className="eraser" onClick={eraserBtn}>
        지우개
      </button>
    </div>
  );
}
