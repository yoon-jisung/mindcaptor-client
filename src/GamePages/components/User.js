import React from 'react';
import UserPic from '../../images/Character1.png';

export default function User({ users, userInfo, inputPresenter }) {
  console.log('유저!!', users);
  return (
    <div className="UserTable">
      <ul className="users">
        {users.map((el) => {
          return (
            <li className="inGameUserProfile">
              {inputPresenter ? <h3>출제자</h3> : null}
              <img className="inGameImg" src={el.UserPic} alt="user_profile" />
              <div>
                <div className="inGameUserNickName">닉네임 : {el.nickname}</div>
                <div className="comment">자기소개</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
