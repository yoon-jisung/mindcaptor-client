import React from 'react';
import CreateGame from './CreateGame';

export default function CreateGameBtn({ openModal, createModal, closeModal }) {
  return (
    <div>
      <button onClick={openModal} className="create_game_btn">
        방 만들기
      </button>
      <CreateGame createModal={createModal} closeModal={closeModal} />
    </div>
  );
}
