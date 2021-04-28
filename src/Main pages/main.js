import React from 'react';
import twix from './twix.png';
import './main.css';

export default function main() {
  return (
    <div className="main">
      <box className="logo_box">
        <img src={twix} className="logo"></img>
      </box>
      <div className="entry">
        <button className="guest_entry_btn">게스트 참가</button>
        <button className="member_entry_btn">아이디 참가</button>
      </div>

      <a className="signup">회원가입</a>

      <div className="game">
        <button className="summery_btn">게임설명</button>
        <button className="howToPlay_btn">게임방법</button>
      </div>
    </div>
  );
}
