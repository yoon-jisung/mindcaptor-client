import logo from '../images/mindcaptor_logo2.png';
import '../main.css';
import SigninBtn from './components/SigninBtn';
import SignupBtn from './components/SignupBtn';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useHistory } from 'react-router-dom';
const axios = require('axios');

export default function Main({loginHandler}) {
  const history = useHistory();
  const guestLogIn = () => {
    axios
    .get("http://localhost:4000/guest")
    .then((res) => {
      console.log(res.data)
      loginHandler(res.data);
      history.push('/Waiting');
    })
    .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="main">
        <box className="logo_div">
          <img src={logo} className="logo"></img>
        </box>

        <div className="entry_div">
          <button onClick={guestLogIn} className="guest_entry_btn">게스트 참가</button>
          <SigninBtn loginHandler={loginHandler}>로그인 참가</SigninBtn>
        </div>

        <div className="signup_div">
          <SignupBtn loginHandler={loginHandler}>회원가입</SignupBtn>
        </div>
        <div className="game">
          <Popup
            className="summery_btn"
            trigger={<button> 게임설명</button>}
            position="bottom center"
            on={['hover', 'focus']}
          >
            <p>그림도 그리고 친구들이 출제한 문제도 맞춰보세요 !</p>
          </Popup>
          <Popup
            className="howToPlay_btn"
            trigger={<button> 게임방법</button>}
            position="bottom center"
            on={['hover', 'focus']}
          >
            <div>
              <p>
                1. 플레이 하는 인원이 2명이면 자동으로 게임은 플레이 됩니다.
              </p>
              <p>
                2. 출체자가 된 경우 3개의 단어중에 하나를 선택 후 팬과 색깔을
                사용하여 그림으로 표현하세요 !
              </p>
              <p>3. 제한시간은 3분입니다.</p>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}
