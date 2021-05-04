import React, { useState, useEffect, useRef } from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';
import User from './components/User';
import Answer from './components/AnswerInput';
import BackBtn from './components/BackBtn';
import Result from './components/Result';
import SelectWords from './components/SelectWords';
import Chat from './components/Chat';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000', {
  transports: ['websocket', 'polling'],
});

import GameStartBtn from './components/GameStartBtn';
import Words from '../Words';
import GameOver from './components/IsInGameMsg';

export default function InGame() {
  const [resultPopup, setResultPopup] = useState(false);
  const [answer, setAnswer] = useState('');
  const [IsOpen, SetIsOpen] = useState(true);

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const [isInGame, setIsInGame] = useState(true);

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
  const [minutes, setMinutes] = useState(parseInt(0));
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
    setIsInGame(true);
  };

  const handleGameStart = () => {
    if (minutes === 0 && seconds === 0) {
      setMinutes(1); // 시간 다시 설정
      setIsTrueTimer(true); // Timer 다시 돌아감
      SetIsOpen(true);
      RandomItem();
      setIsInGame(false);
    }
  };

  const handleAnswer = (word) => {
    setAnswer(word);
    SetIsOpen(false);
  };

  const submit = (event) => {
    // * 소켓에 메세지 보낼때
    event.preventDefault();
    socket.emit('send', message);
    setMessage('');
  };

  //! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  useEffect(() => {
    // 사용자 정보 소켓으로 불러 오기
    socket.on('connection', () => {
      console.log('users connected');
      socket.emit('username', users);
    });

    socket.on('users', (users) => {
      setUsers(users);
    });

    socket.on();

    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on('connected', (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on('disconnected', (id) => {
      setUsers((users) => {
        return users.filter((user) => user.id !== id);
      });
    });
  }, []);

  useEffect(() => {
    setMin(3);
    setSec(0);
    socket.emit('set answer', answer);
  }, [answer]);

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
            <Canvas className="canvas" />
            <SelectWords
              Word1={Word1}
              Word2={Word2}
              Word3={Word3}
              RandomItem={RandomItem}
              handleAnswer={handleAnswer}
              IsOpen={IsOpen}
              answer={answer}
            />
            {resultPopup ? <Result /> : null}
          </div>
          <Answer />
          <User />
          <div className="startOrQuitBtns">
            <BackBtn />
            <GameStartBtn
              isInGame={isInGame}
              handleGameStart={handleGameStart}
            />
            <Chat
              users={users}
              message={message}
              messages={messages}
              submit={submit}
            />
          </div>
        </div>
      </>
    </div>
  );
}
