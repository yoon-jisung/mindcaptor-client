import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

function BackBtn() {
  const history = useHistory();
  return (
    <span>
      <button className="Back" onClick={() => history.push('/Waiting')}>
        대기실
      </button>
    </span>
  );
}

export default withRouter(BackBtn);
