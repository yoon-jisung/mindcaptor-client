import React from 'react';
import Canvas from './components/Canvas3';

import User from './components/User';

export default function InGame() {
  return (
    <div>
      <Canvas className="canvas" />
      <User />
    </div>
  );
}
