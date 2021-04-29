import twix from './twix.png';
import background from './candy-bar-1735659_1920.jpg';
import './main.css';
import SigninBtn from './components/SigninBtn';
import SignupBtn from './components/SignupBtn';
import Popup from 'reactjs-popup';

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
        <Popup
          className="summery_btn"
          trigger={<button> 게임설명</button>}
          position="bottom center"
          on={['hover', 'focus']}
        >
          <p>
            게임설명 입니다 게임설명 입니다게임설명 입니다게임설명
            입니다게임설명 입니다게임설명 입니다게임설명 입니다게임설명
            입니다게임설명 입니다게임설명 입니다게임설명 입니다게임설명
            입니다게임설명 입니다게임설명 입니다게임설명 입니다게임설명
            입니다게임설명 입니다게임설명 입니다게임설명 입니다게임설명
            입니다게임설명 입니다게임설명 입니다게임설명 입니다
          </p>
        </Popup>
        <Popup
          className="howToPlay_btn"
          trigger={<button> 게임방법</button>}
          position="bottom center"
          on={['hover', 'focus']}
        >
          <div>
            게임방법 입니다. 게임방법 입니다.게임방법 입니다.게임방법
            입니다.게임방법 입니다.게임방법 입니다.게임방법 입니다.게임방법
            입니다.게임방법 입니다.게임방법 입니다.게임방법 입니다.게임방법
            입니다.게임방법 입니다.게임방법 입니다.게임방법 입니다.게임방법
            입니다.게임방법 입니다.게임방법 입니다.게임방법 입니다.게임방법
            입니다.게임방법 입니다.
          </div>
        </Popup>
      </div>
    </div>
  );
}
