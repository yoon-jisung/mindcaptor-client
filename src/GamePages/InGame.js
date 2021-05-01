import React from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';
import User from './components/User';
import Answer from './components/Answer';

export default function InGame() {
  return (
    <div>
      <Timer />
      <Canvas className="canvas" />
      <Answer />
      <User />
    </div>
  );
}
