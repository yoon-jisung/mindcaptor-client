import React, { useState } from 'react';

export default function serchUser() {
  return (
    <div className="follow">
      <div>이메일로 유저 팔로잉</div>
      <input type="text" placeholder="유저 이메일"></input>
      <article className="follow/folloing">
        <div>팔로워</div>
        <ul>
          <li className="user">김코딩</li>
        </ul>
        <div>팔로잉</div>
        <ul>
          <li className="user">박해커</li>
        </ul>
      </article>
    </div>
  );
}
