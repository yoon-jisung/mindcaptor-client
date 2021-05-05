import axios from 'axios';
import { useHistory } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

export default function CreateGame({ createModal, closeModal,accessToken }) {
  const [roomName, setRoomName] = useState('');
  const [roomPassword, setRoomPassword] = useState('');
  const history = useHistory();

  const roomNameInputValue = (e) => {
    setRoomName(e.target.value);
  };

  const roomPasswordInputValue = (e) => {
    setRoomPassword(e.target.value);
  };

  const createRoomHandler = async (e) => {
    e.preventDefault();
    const [room_name, room_pw] = [roomName, roomPassword];

    await axios
      .post(
        'http://localhost:4000/room/new',
        { room_name, room_pw },
        {
          headers: { 
            'Content-Type': 'application/json',
            'authorization': accessToken
          },
          Credentials: 'include',
        }
      )
      .then((res) => {
        console.log(res.data);
        history.push(`/room/${res.data.data}`)
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {createModal ? (
        <div className="createRoom">
          <form
            className="createRoomForm"
            conSubmit={(e) => e.preventDefault()}
          >
            <span
              type="button"
              aria-label="Close"
              className="signin_exit"
              onClick={closeModal}
            >
              &times;
            </span>
            <div className="createRoomInput">
              <input
                name="room_name"
                className="room"
                type="text"
                placeholder="방이름"
                onChange={roomNameInputValue}
              />
              <input
                name="password"
                className="room_password"
                type="password"
                placeholder="방 비밀번호(필수아님!)"
                onChange={roomPasswordInputValue}
              />
              <button
                type="submit"
                className="createRoom_btn"
                onClick={createRoomHandler}
              >
                방만들기
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
