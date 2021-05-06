import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import GuestMyPageBtn from './GuestMyPage';

function MyPageBtn({ nickname }) {
  const history = useHistory();
  return (
    <div>
      {nickname === '게스트' ? (
        <GuestMyPageBtn />
      ) : (
        <button onClick={() => history.push('/MyPage')} className="mypage_btn">
          마이페이지
        </button>
      )}
    </div>
  );
}

export default withRouter(MyPageBtn);
// onClick={() => history.push('/')
