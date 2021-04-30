import React from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';

export default function InGame() {
  return (
    <div>
      <Timer />
      <Canvas className="canvas" />
    </div>
  );
}
