import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function EntryGame() {
  const history = useHistory();

  const handleUrl = async () => {
    console.log('test');
    const result = await axios.post('http://localhost:4000/room/join', {});
    history.push(`/room/${result.data}`);
  };

  return (
    <div>
      <button onClick={() => handleUrl()} className="entry_game_btn">
        방 참여하기
      </button>
    </div>
  );
}
export default EntryGame;
