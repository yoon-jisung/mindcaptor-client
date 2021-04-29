import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

export default function Signout() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push('/')} className="signout_btn">
        로그아웃
      </button>
    </div>
  );
}
