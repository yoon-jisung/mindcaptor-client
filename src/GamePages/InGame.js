import React from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';

import User from './components/User';

export default function InGame() {
  return (
    <div>
      <Timer />
      <Canvas className="canvas" />
      <User />
    </div>
  );
}
