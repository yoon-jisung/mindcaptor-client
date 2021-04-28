import React from 'react';
import twix from './twix.png';
import './main.css';
import SigninBtn from './components/SigninBtn';
import SignupBtn from './components/SignupBtn';

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
        <button className="summery_btn">게임설명</button>
        <button className="howToPlay_btn">게임방법</button>
      </div>
    </div>
  );
}
