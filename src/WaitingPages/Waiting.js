import React, { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo';
import ProfilePic from './components/ProfilePic';
import EntryGame from './components/EntryGame';
import CreateGameBtn from './components/CreateGameBtn';
import MyPageBtn from './components/MyPageBtn';
import Signout from './components/Signout';
import '../main.css';

export default function Waiting({
  accessToken,
  isLogIn,
  loginCheck,
  hendleLogout,
  userInfo,
}) {
  const [createModal, setCreateModal] = useState(false);

  const closeModal = () => {
    setCreateModal(false);
  };
  const openModal = () => {
    setCreateModal(true);
  };

  useEffect(() => {
    loginCheck(isLogIn);
  });

  return (
    <div>
      <div className="waiting">
        <div className="waiting_box">
          <ProfilePic />
          <UserInfo accessToken={accessToken} userInfo={userInfo} />
        </div>
        <div className="waiting_btns">
          <EntryGame accessToken={accessToken} userInfo={userInfo} />
          <CreateGameBtn
            openModal={openModal}
            createModal={createModal}
            closeModal={closeModal}
          />
          <MyPageBtn />
        </div>
        <div className="waiting_signout_btn">
          <Signout isLogIn={isLogIn} hendleLogout={hendleLogout} />
        </div>
      </div>
    </div>
  );
}
