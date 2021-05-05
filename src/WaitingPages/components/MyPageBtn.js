import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

function MyPageBtn() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/MyPage')} className="mypage_btn">
        마이페이지
      </button>
    </div>
  );
}

export default withRouter(MyPageBtn);
// onClick={() => history.push('/')
