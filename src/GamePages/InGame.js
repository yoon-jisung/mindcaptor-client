import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';
import User from './components/User';
import Answer from './components/Answer';

export default function InGame() {
  const [IsReady, SetIsReady] = useState(false);

  const CanPlay = () => {
    setTimeout(() => SetIsReady(true), 3000);
  };

  const CantPlay = () => {
    SetIsReady(false);
  };

  useEffect(() => {
    console.log(IsReady);
    CanPlay();
  });

  return (
    <div>
      {IsReady ? (
        <>
          <Timer />
          <div className="GameWindow">
            <Canvas className="canvas" />
            <Answer />
            <User />
          </div>
        </>
      ) : (
        <span className="Ready">
          <h1>Ready ?</h1>
          <User />
        </span>
      )}
    </div>
  );
}
