import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';
import User from './components/User';
import Answer from './components/Answer';
import BackBtn from './components/BackBtn';
import Result from './components/Result';

export default function InGame() {
  const [IsReady, SetIsReady] = useState(false);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(3);
  const [resultPopup, setResultPopup] = useState(false);

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

  const handleResult = () => {
    setResultPopup(true);
  };

  useEffect(() => {
    // 일정 시간이 지나면 결과창 닫히고 다시 게임 시작
    const closeResult = setTimeout(() => setResultPopup(false), 3000);
    return () => {
      clearTimeout(closeResult);
    };
  }, [resultPopup]);

  return (
    <div>
      {IsReady ? (
        <>
          <Timer min={min} sec={sec} handleResult={handleResult} />
          <div className="GameWindow">
            <div className="result_box">
              <Canvas className="canvas" />
              {resultPopup ? <Result /> : null}
            </div>
            <Answer />
            <User />
            <BackBtn />
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
