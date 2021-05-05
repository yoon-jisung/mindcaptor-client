import React, { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo';
import ProfilePic from './components/ProfilePic';
import EntryGame from './components/EntryGame';
import CreateGameBtn from './components/CreateGameBtn';
import MyPageBtn from './components/MyPageBtn';
import Signout from './components/Signout';
import { useHistory } from 'react-router-dom';

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

  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();

  //뒤로가기 버튼 방지
  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          // Handle forward event
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);

          history.push('/Waiting');
        }
      }
    });
  }, [locationKeys]);
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
            accessToken={accessToken}
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
