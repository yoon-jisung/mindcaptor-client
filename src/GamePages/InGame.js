import React, { useState, useEffect, useRef } from 'react';
import Timer from './components/Timer';
import User from './components/User';
import BackBtn from './components/BackBtn';
import Result from './components/Result';
import SelectWords from './components/SelectWords';
import Chat from './components/Chat';
import io from 'socket.io-client';
import GameStartBtn from './components/GameStartBtn';
import Words from '../Words';
import { useHistory } from 'react-router-dom';
import Logo from './components/Logo';
import Canvas from './components/Canvas3';
const socket = io.connect('http://localhost:4000', {
  transports: ['websocket'],
  path: '/socket.io',
});

export default function InGame({ accessToken, isLogIn, loginCheck, userInfo }) {
  const [resultPopup, setResultPopup] = useState(false);
  const [IsOpen, SetIsOpen] = useState(true);
  const [presenter, setPresenter] = useState({ nickname: '', id: '' });
  const [isInGame, setIsInGame] = useState(true);
  const [isPresenter, setIsPresenter] = useState(false);
  const [winner, setWinner] = useState([]);
  const [userlist, setUserlist] = useState([]);
  const [inputPresenter, setInputPresenter] = useState(false);

  //뒤로가기 버튼 방지
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          // Handle forward event
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
          history.push('/room');
        }
      }
    });
  }, [locationKeys]);

  // ! Chat
  const [state, setState] = useState({ message: '', name: userInfo.nickname });
  const [chat, setChat] = useState([]);
  // ! App.js 에서 유저이름 name에 넣으면 됨 !

  // ! SelectWords
  const [Word1, SetWord1] = useState('');
  const [Word2, SetWord2] = useState('');
  const [Word3, SetWord3] = useState('');
  const [answer, setAnswer] = useState('');

  // ! Timer
  const [isTrueTimer, setIsTrueTimer] = useState(false);
  const [minutes, setMinutes] = useState(parseInt(0));
  const [seconds, setSeconds] = useState(parseInt(0));

  // ! ---------------------state---------------------------

  const RandomItem = () => {
    SetWord1(Words[Math.floor(Math.random() * Words.length)]);
    SetWord2(Words[Math.floor(Math.random() * Words.length)]);
    SetWord3(Words[Math.floor(Math.random() * Words.length)]);
  };

  const handleResult = () => {
    setResultPopup(true);
    setIsInGame(true);
  };

  const handleGameStart = () => {
    startRound();
    // setMinutes(1); // 시간 다시 설정
    // setIsTrueTimer(true); // Timer 다시 돌아감
    SetIsOpen(true);
    // RandomItem();
    // setIsInGame(false);
  };

  const handleAnswer = (word) => {
    setAnswer(word);
    SetIsOpen(false);
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit('send message', name, message);

    setState({ message: '', name });
  };

  const onTextChange = (e) => {
    setState({ ...state, message: e.target.value });
  };

  const startRound = () => {
    setWinner([]);
    setAnswer('');
    setIsPresenter(false);
    socket.emit('start round');
    SetIsOpen(true);
    RandomItem();
  };

  const SetAnswer = (answer) => {
    socket.emit('set answer', { answer });
  };

  const endGame = () => {
    setResultPopup(true);
    setInputPresenter(false);
  };

  //! --------------------------method--------------------------
  useEffect(() => {
    const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log('정답', localUserInfo.nickname);
    console.log('출제자', presenter, presenter.nickname);

    if (presenter.nickname === localUserInfo.nickname) {
      setInputPresenter(true);
      console.log('너가출제자123213', localUserInfo.nickname);
    }
  });

  useEffect(() => {
    console.log('inputPresenter:내가발표자');
  }, [inputPresenter]);

  

  useEffect(() => {

    // * 문제가 선택되면 게임스타트와 문제를 서버에 보내줌
    SetAnswer(answer);
  }, [answer]);

  useEffect(() => {
    socket.on('set presenter', (presenter) => {
      setPresenter(presenter);
      if (presenter.id === userInfo.id) {
        setIsPresenter(true);
      }
    });
    // answer를 전달받는다
    socket.on('get answer', (answer) => {
      setAnswer(answer);
    });

    socket.on('timer ticking', (newSeconds) => {
      setSeconds(newSeconds);
    });

    socket.on('end round', () => {
      setResultPopup(true);
    });

    socket.on('get right answer', (name) => {
      setWinner([...winner, name]);
    });



    socket.on('renew userlist', (list) => {
      setUserlist([...list]);
    });
  }, []);

  useEffect(() => {

    socket.on('show chat', (name, message) => {
      if (chat.length > 10) {
        setChat([...chat.slice(1), { name, message }]);
      } else {
        setChat([...chat, { name, message }]);
      }
    });
  }, [state]);

  useEffect(() => {
    // * 사용자 정보 소켓으로 불러 오기

    let parsedUrl = window.location.href.split('/');
    let roomNum = parsedUrl[parsedUrl.length - 1];
    socket.emit('send roomNum', roomNum);
  }, []);

  return (
    <>
      <BackBtn />

      <div className="justBox"></div>
      <div className="GameWindow">
        <div className="canvasBox">
          <div className="result_box">
            <Canvas />
            <Logo />
            {isPresenter ? (
              <SelectWords
                Word1={Word1}
                Word2={Word2}
                Word3={Word3}
                RandomItem={RandomItem}
                handleAnswer={handleAnswer}
                IsOpen={IsOpen}
                answer={answer}
              />
            ) : (
              <></>
            )}
            {resultPopup ? <Result winner={winner} /> : null}
          </div>
        </div>
        <User
          className="inGame"
          users={userlist}
          userInfo={userInfo}
          inputPresenter={inputPresenter}
        />
        <div className="chatBix">
          <Timer
            minutes={minutes}
            seconds={seconds}
            handleResult={handleResult}
            handleAnswer={handleAnswer}
          />
          <Chat
            state={state}
            chat={chat}
            onTextChange={onTextChange}
            onMessageSubmit={onMessageSubmit}
          />
        </div>

        <div className="startOrQuitBtns">
          <GameStartBtn isInGame={isInGame} handleGameStart={handleGameStart} />
        </div>
      </div>
    </>
  );
}
