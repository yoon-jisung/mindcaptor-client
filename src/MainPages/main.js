import twix from './twix.png';
import './main.css';
import SigninBtn from './components/SigninBtn';
<<<<<<< HEAD
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
=======
import SignupBtn from './components/SignupBtn';
>>>>>>> aa11ab27c2194ac7f02093e5a29adab953375a92

export default function main() {
  return (
    <div className="main">
      <box className="logo_div">
        <img src={twix} className="logo"></img>
      </box>
      <div className="entry_div">
        <button className="guest_entry_btn">게스트 참가</button>
        <SigninBtn>로그인 참가</SigninBtn>
      </div>
      <div className="signup_div">
        <SignupBtn>회원가입</SignupBtn>
      </div>

      <div className="game">
        <button
          onClick={
            <Popup trigger={<button> Trigger</button>} position="right center">
              <div>Popup content here !!</div>
            </Popup>
          }
          className="summery_btn"
        >
          게임설명
        </button>
        <button
          onClick={
            <Popup trigger={<button> Trigger</button>} position="right center">
              <div>Popup content here !!</div>
            </Popup>
          }
          className="howToPlay_btn"
        >
          게임방법
        </button>
      </div>
    </div>
  );
}
