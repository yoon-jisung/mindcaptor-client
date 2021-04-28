import React from 'react';
import twix from './twix.png';
import './main.css';
export default function main() {
  return (
    <container className="main">
      <box className="logo_box">
        <img src={twix} className="logo"></img>
      </box>
      <button className="guest_entry">게스트 참가</button>
      <button className="member_entry">아이디 참가</button>
      <a className="signup">회원가입</a>
      <button className="summery">게임설명</button>
      <button className="howToPlay">게임방법</button>
    </container>
  );
}
