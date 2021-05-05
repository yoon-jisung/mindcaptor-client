import React from 'react';
import UserPic from '../../images/Character1.png';

export default function User() {
  return (
    <div className="UserTable">
      <ul className="users">
        <li className="userProfile">
          {/* <img src={UserPic} className="userPic"></img> */}
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
        <li className="userProfile">
          {/* <img src={UserPic} className="userPic"></img> */}
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
        <li className="userProfile">
          {/* <img src={UserPic} className="userPic"></img> */}
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
        <li className="userProfile">
          {/* <img src={UserPic} className="userPic"></img> */}
          <div className="userNickName">닉네임</div>
          <div className="correctAns">정답: ?</div>
        </li>
      </ul>
    </div>
  );
}
