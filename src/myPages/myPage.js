import React, { usestate } from 'react';
import twix from './twix.png';
import { Link, withRouter, useHistory } from 'react-router-dom';

function MyPage() {
  const history = useHistory();
  return (
    <div>
      <header>
        <img src={twix} className="logo"></img>
        <span onClick={() => history.push('/Waiting')}>나가기</span>
      </header>

      <section>
        <buttton>편집</buttton>
        <div>프로필 사진 변경</div>
      </section>

      <section>
        <div>이메일로 유저 팔로잉</div>
        <input type="text" placeholder="유저 이메일"></input>
        <article>
          <div>팔로워</div>
          <ul>
            <li>유저</li>
          </ul>
        </article>
        <article>
          <div>팔로잉</div>
          <ul>
            <li>유저</li>
          </ul>
        </article>
      </section>
    </div>
  );
}

export default withRouter(MyPage);
