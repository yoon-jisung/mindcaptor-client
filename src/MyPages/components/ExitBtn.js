import React from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

export default function ExitBtn() {
  const history = useHistory();
  return (
    <span>
      <button onClick={() => history.push('/Waiting')}>나가기</button>
    </span>
  );
}
