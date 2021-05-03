import React from 'react';

export default function User({ Round }) {
  return (
    <div className="UserTable">
      <ul>
        <div className="Round">Round : {Round}</div>

        <li className="userProfile">
          <div className="userPic">유저 사진</div>
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
        <li className="userProfile">
          <div className="userPic">유저 사진</div>
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
        <li className="userProfile">
          <div className="userPic">유저 사진</div>
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
        <li className="userProfile">
          <div className="userPic">유저 사진</div>
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
      </ul>
    </div>
  );
}
