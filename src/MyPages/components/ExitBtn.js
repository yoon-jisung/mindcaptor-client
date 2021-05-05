import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ExitBtn() {
  const history = useHistory();
  return (
    <span className="Exit">
      <button onClick={() => history.push('/Waiting')}>나가기</button>
    </span>
  );
}
