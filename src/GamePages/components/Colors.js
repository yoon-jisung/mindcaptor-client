import React, { useState } from 'react';

export default function Colors({ handleColorClick }) {
  return (
    <div className="Colors">
      <div className="black" onClick={handleColorClick}>
        black
      </div>
      <div className="red" onClick={handleColorClick}>
        red
      </div>
      <div className="blue" onClick={handleColorClick}>
        blue
      </div>
      <div className="green" onClick={handleColorClick}>
        green
      </div>
      <div className="yellow" onClick={handleColorClick}>
        yellow
      </div>
    </div>
  );
}
