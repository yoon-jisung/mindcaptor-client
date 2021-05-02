import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

function BackBtn() {
  const history = useHistory();
  return (
    <span className="Back">
      <button onClick={() => history.push('/Waiting')}>대기실</button>
    </span>
  );
}

export default withRouter(BackBtn);
