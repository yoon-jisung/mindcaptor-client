import React from 'react';
import Canvas from './components/Canvas3';

import Answer from './components/Answer';

export default function InGame() {
  return (
    <div>
      <Canvas className="canvas" />
      <Answer />
    </div>
  );
}
