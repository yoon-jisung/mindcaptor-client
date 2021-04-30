import React, { useRef, useState, useEffect } from 'react';

export default function Canvas2() {
  const canvas = useRef(null);
  const [ctx, setCts] = useState(undefined);
  const [pos, setPos] = useState({
    drawable: false,
    X: -1,
    Y: -1,
  });

  return (
    <div>
      <h1>MindCaptor</h1>
      <canvas ref={canvas}></canvas>

      <div className="controls_range">
        <input
          type="range"
          id="jsRange"
          min="0.1"
          max="5"
          value="2.5"
          step="0.1"
        />
      </div>

      <div class="controls_btns">
        <button id="jsMode">Fill</button>
        <button id="jsSave">Save</button>
      </div>
    </div>
  );
}
