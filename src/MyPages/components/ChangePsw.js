import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ChangePsw() {
  return (
    <div>
      <Popup
        trigger={<button className="changePsw">비밀번호 변경</button>}
        position="bottom center"
        closeOnDocumentClick
      >
        <input
          placeholder="현재 비밀번호"
          className="changePswOld"
          className="changePswInput"
        ></input>
        <input
          placeholder="새로운 비밀번호"
          className="changePswNew"
          className="changePswInput"
        ></input>
        <button className="changePswBtn">변경!</button>
      </Popup>{' '}
    </div>
  );
}
