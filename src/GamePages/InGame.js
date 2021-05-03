import React, { useState, useEffect, useRef } from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';
import User from './components/User';
import Answer from './components/Answer';
import BackBtn from './components/BackBtn';
import Result from './components/Result';
import SelectWords from './components/SelectWords';
import GameStartBtn from './components/GameStartBtn';
import Words from '../Words';

export default function InGame() {
  const [resultPopup, setResultPopup] = useState(false);
  const [Round, SetRound] = useState(0);
  const [answer, setAnswer] = useState('');
  const [IsOpen, SetIsOpen] = useState(false);

  //! SelectWords
  const [Word1, SetWord1] = useState('');
  const [Word2, SetWord2] = useState('');
  const [Word3, SetWord3] = useState('');

  const RandomItem = () => {
    SetWord1(Words[Math.floor(Math.random() * Words.length)]);
    SetWord2(Words[Math.floor(Math.random() * Words.length)]);
    SetWord3(Words[Math.floor(Math.random() * Words.length)]);
  };

  //! Timer
  const [isTrueTimer, setIsTrueTimer] = useState(false);
  const [minutes, setMinutes] = useState(parseInt(1));
  const [seconds, setSeconds] = useState(parseInt(0));

  useEffect(() => {
    if (isTrueTimer) {
      const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
          setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
          if (parseInt(minutes) === 0) {
            clearInterval(countdown);
            handleResult();
          } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(countdown);
      };
    }
  }, [minutes, seconds, isTrueTimer]);

  //!
  const handleResult = () => {
    setResultPopup(true);
  };

  const countRound = () => {
    SetRound(Round + 1);
  };

  const handleGameStart = () => {
    SetIsOpen(true);
    RandomItem();
    setIsTrueTimer(true); // Timer 다시 돌아감
    setMinutes(1); // 시간 다시 설정
    //selectwords에 있는 RandomItem를 들고오면 해결
  };
  const handleAnswer = (word) => {
    setAnswer(word);
    SetIsOpen(false);
    SetRound(Round + 1);
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
      <>
        <Timer
          minutes={minutes}
          seconds={seconds}
          handleResult={handleResult}
          handleAnswer={handleAnswer}
        />
        <div className="GameWindow">
          <div className="result_box">
            <Canvas Round={Round} className="canvas" />
            <SelectWords
              Word1={Word1}
              Word2={Word2}
              Word3={Word3}
              RandomItem={RandomItem}
              handleAnswer={handleAnswer}
              IsOpen={IsOpen}
              answer={answer}
              CountRound={() => countRound}
            />
            {resultPopup ? <Result /> : null}
          </div>
          <Answer />
          <User />
          <div className="startOrQuitBtns">
            <GameStartBtn handleGameStart={handleGameStart} />
            <BackBtn />
          </div>
        </div>
      </>
    </div>
  );
}
