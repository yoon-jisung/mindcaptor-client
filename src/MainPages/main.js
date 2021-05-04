import logo from '../images/mindcaptor_logo_game.png';
import '../main.css';
import SigninBtn from './components/SigninBtn';
import SignupBtn from './components/SignupBtn';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Waiting from '../WaitingPages/Waiting';
const axios = require('axios');

export default function main({ loginHandler }) {
  return (
    <div>
      <div className="mainTotal">
        <div className="main">
          <div className="logo_div">
            <img src={logo} className="logo" />
          </div>

          <div className="main_btns">
            <div className="signup_div">
              <SignupBtn>회원가입</SignupBtn>
            </div>

            <Popup
              trigger={<button className="summery_btn"> 게임설명</button>}
              position="left center"
              on={['hover', 'focus']}
            >
              <p>
                제한시간 안에 <br></br>친구의 그림을 맞춰보세요!
              </p>
            </Popup>

            <div>
              <Popup
                trigger={<button className="howToPlay_btn"> 게임방법</button>}
                position="left center"
                on={['hover', 'focus']}
              >
                <div>
                  <p>
                    1. 출제자가 된 경우 게임시작 &nbsp;&nbsp;&nbsp;&nbsp;버튼을
                    누르면 단어를 <br></br>&nbsp;&nbsp;&nbsp;&nbsp;선택하실 수
                    있습니다.
                  </p>
                  <br></br>
                  <p>
                    2. 여러가지 색을 활용하여 <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;당신의 그림을 완성하세요.
                  </p>
                  <br></br>
                  <p>3. 출제자는 랜덤입니다.</p>
                  <br></br>
                  <p>4. 최대인원은 4명입니다.</p>
                  <br></br>
                  <p>5. 제한시간은 3분입니다.</p>
                </div>
              </Popup>
            </div>
          </div>
          <div className="entry_div">
            <button className="entry_btn">게스트 참가</button>
            <SigninBtn className="entry_btn" loginHandler={loginHandler}>
              로그인 참가
            </SigninBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
