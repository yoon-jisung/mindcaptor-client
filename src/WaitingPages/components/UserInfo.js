import React from 'react';

export default function UserInfo({ accessToken, userInfo }) {
  return (
    <div>
      <div className="userInfo">{userInfo.nickname}님 !, 안녕하세요</div>
    </div>
  );
}
