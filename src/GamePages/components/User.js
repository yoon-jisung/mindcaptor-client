import React from 'react';
import UserPic from '../../images/Character1.png';

export default function User({ users, userInfo }) {
  return (
    <div className="UserTable">
      <ul className="users">
        {users.map((el) => {
          <li className="inGameUserProfile">
            <div className="inGameUserNickName">{el.nickname}</div>
          </li>;
        })}
        <li className="inGameUserProfile">
          <img className="inGameImg" src={UserPic} alt="user_profile" />
          <div>
            <div className="inGameUserNickName">
              닉네임 : {userInfo.nickname}
            </div>
            <div className="comment">자기소개</div>
          </div>
        </li>
        <li className="inGameUserProfile">
          <img className="inGameImg" src={UserPic} alt="user_profile" />
          <div className="inGameUserNickName">닉네임 : {userInfo.nickname}</div>
        </li>
        <li className="inGameUserProfile">
          <img className="inGameImg" src={UserPic} alt="user_profile" />
          <div className="inGameUserNickName">닉네임 : {userInfo.nickname}</div>
        </li>
        <li className="inGameUserProfile">
          <img className="inGameImg" src={UserPic} alt="user_profile" />
          <div className="inGameUserNickName">닉네임 : {userInfo.nickname}</div>
        </li>
      </ul>
    </div>
  );
}
