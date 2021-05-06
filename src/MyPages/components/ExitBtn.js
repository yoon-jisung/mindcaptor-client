import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ExitBtn({ MyPageSaveData, PhotoNum }) {
  const history = useHistory();
  return (
    <span className="Exit">
      <button
        onClick={() => {
          // MyPageSaveData();
          history.push('/Waiting');
        }}
      >
        나가기
      </button>
    </span>
  );
}
