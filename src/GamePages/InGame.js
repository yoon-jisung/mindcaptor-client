import React, { useState, useEffect } from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';
import User from './components/User';
import Answer from './components/Answer';
import BackBtn from './components/BackBtn';
import Result from './components/Result';
import SelectWords from './components/SelectWords';

export default function InGame() {
  const [IsReady, SetIsReady] = useState(false);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [resultPopup, setResultPopup] = useState(false);
  const [Round, SetRound] = useState(0);
  const [answer, setAnswer] = useState('');
  const [IsOpen, SetIsOpen] = useState(true);

  useEffect(() => {
    console.log(IsReady);
    console.log(min);
    console.log(sec);
    console.log(answer);
  }, []);

  const CanPlay = () => {
    setTimeout(() => SetIsReady(true), 3000);
  };

  const CantPlay = () => {
    SetIsReady(false);
  };

  useEffect(() => {
    CanPlay();
  });

  useEffect(() => {
    setMin(3);
    setSec(0);
  }, [answer]);

  const handleResult = () => {
    setResultPopup(true);
  };
  const countRound = () => {
    SetRound(Round + 1);
  };

  const handleAnswer = (word) => {
    setAnswer(word);
    SetIsOpen(false);
    SetRound(Round + 1);
    setMin(3);
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
          <Timer min={min} sec={sec} handleResult={handleResult} />{' '}
          <div className="GameWindow">
            <div className="result_box">
              <Canvas Round={Round} className="canvas" />
              <SelectWords
                handleAnswer={handleAnswer}
                IsOpen={IsOpen}
                answer={answer}
                CountRound={() => countRound}
              />
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
