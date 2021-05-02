import React from 'react';
import { useHistory } from 'react-router-dom';

export default function EntryGame() {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => history.push('/InGame')}
        className="entry_game_btn"
      >
        방 참여하기
      </button>
    </div>
  );
}
