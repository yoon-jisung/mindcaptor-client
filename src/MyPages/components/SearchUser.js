import React from 'react';

export default function SearchUser() {
  return (
    <div>
      <div className="community">
        <div className="communityBox">
          <h1>커뮤니티</h1>
          <div className="followBox">
            <div className="following">
              <div>팔로잉</div>
              <input type="text" placeholder="유저 이메일"></input>
              <ul className="followList"></ul>
            </div>
            <div className="follower">
              <div>팔로워</div>
              <input type="text" placeholder="유저 닉네임"></input>
              <ul className="followList"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
