import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Signout({ hendleLogout }) {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => hendleLogout()} className="signout_btn">
        ๋ก๊ทธ์์
      </button>
    </div>
  );
}
