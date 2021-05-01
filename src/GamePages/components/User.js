import React from 'react';

export default function User() {
  return (
    <div>
      <div className="userProfile">
        <div className="userPic">유저 사진</div>
        <div className="userNickName">닉네임</div>
        <div className="correctAns">정답: ?</div>
      </div>
    </div>
  );
}
