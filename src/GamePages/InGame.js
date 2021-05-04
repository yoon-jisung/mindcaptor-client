import React, { useState, useEffect, useRef } from 'react';
import Canvas from './components/Canvas3';
import Timer from './components/Timer';
import User from './components/User';
import BackBtn from './components/BackBtn';
import Result from './components/Result';
import SelectWords from './components/SelectWords';
import Chat from './components/Chat';
import io from 'socket.io-client';
import GameStartBtn from './components/GameStartBtn';
import Words from '../Words';
import GameOver from './components/IsInGameMsg';

const socket = io.connect('http://localhost:4000', {
  transports: ['websocket', 'polling'],
  path: '/socket.io',
});

export default function InGame({}) {
  const [resultPopup, setResultPopup] = useState(false);
  const [IsOpen, SetIsOpen] = useState(true);

  const socketRef = useRef();
  const [state, setState] = useState({ message: '', name: '' });
  const [chat, setChat] = useState([]);
  const [isInGame, setIsInGame] = useState(true);

  // ! SelectWords
  const [Word1, SetWord1] = useState('');
  const [Word2, SetWord2] = useState('');
  const [Word3, SetWord3] = useState('');
  const [answer, setAnswer] = useState('');

  // ! Timer
  const [isTrueTimer, setIsTrueTimer] = useState(false);
  const [minutes, setMinutes] = useState(parseInt(0));
  const [seconds, setSeconds] = useState(parseInt(0));
  const [presenter, setPresenter] = useState();
  // ! ---------------------state---------------------------

  const RandomItem = () => {
    SetWord1(Words[Math.floor(Math.random() * Words.length)]);
    SetWord2(Words[Math.floor(Math.random() * Words.length)]);
    SetWord3(Words[Math.floor(Math.random() * Words.length)]);
  };

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
      // startRound();
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

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  const onMessageSubmit = (e) => {
    // * 소켓에 메세지 보낼때
    console.log('메세지가 보내짐');
    const { name, message } = state;
    socketRef.current.emit('message', { name, message });
    e.preventDefault();
    setState({ message: '', name });
  };

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const startRound = () => {
    socket.emit('start round');
    socket.on('set presenter', (presenter) => {
      setPresenter(presenter);
    });
  };
  const SetAnswer = (answer) => {
    socket.emit('set answer', { answer });
  };

  const endRound = () => {
    socket.emit('end round');
  };

  //! --------------------------method--------------------------
  useEffect(() => {
    socketRef.current = socket;
    socketRef.current.on('message', ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    // return () => socketRef.current.disconnect();
  }, [chat]);

  useEffect(() => {
    SetAnswer(answer);
  }, [answer]);

  useEffect(() => {
    // 사용자 정보 소켓으로 불러 오기
    socket.on('my socket id', (data) => {
      console.log('mySocketID : ', data);
      // socket.on('connection', () => {
      //   console.log('users connected');
      //   socket.emit('username', users);
      // });

      // socket.on('users', (users) => {
      //   setUsers(users);
      // });

      // socket.on();

      // socket.on('message', (message) => {
      //   setMessages((messages) => [...messages, message]);
      // });

      // socket.on('connected', (user) => {
      //   setUsers((users) => [...users, user]);
      // });

      // socket.on('disconnected', (id) => {
      //   setUsers((users) => {
      //     return users.filter((user) => user.id !== id);
      //   });
    });
  }, []);

  useEffect(() => {
    // 일정 시간이 지나면 결과창 닫히고 다시 게임 시작

    const closeResult = setTimeout(() => setResultPopup(false), 3000);
    return () => {
      clearTimeout(closeResult);
      endRound();
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
          {/* <Answer /> */}
          <User />
          <Chat
            state={state}
            chat={chat}
            onTextChange={onTextChange}
            onMessageSubmit={onMessageSubmit}
            renderChat={renderChat}
          />
          <div className="startOrQuitBtns">
            <BackBtn />
            <GameStartBtn
              isInGame={isInGame}
              handleGameStart={handleGameStart}
            />
          </div>
        </div>
      </>
    </div>
  );
}
