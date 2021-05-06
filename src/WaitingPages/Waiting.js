import React, { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo';
import ProfilePic from './components/ProfilePic';
import EntryGame from './components/EntryGame';
import CreateGameBtn from './components/CreateGameBtn';
import MyPageBtn from './components/MyPageBtn';
import Signout from './components/Signout';
import { useHistory } from 'react-router-dom';

export default function Waiting({
  accessToken,
  hendleLogout,
  userInfo,
  refreshTokenRequest,
}) {
  const [createModal, setCreateModal] = useState(false);
  const { token } = accessToken;
  const { nickname } = userInfo;
  useEffect(() => {
    localStorage.setItem('accessToken', token);
  });

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
    refreshTokenRequest();
    if (accessToken.accessToken === null) {
      history.push('/');
    }
  }, []);

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
          <MyPageBtn nickname={nickname} />
        </div>
        <div className="waiting_signout_btn">
          <Signout hendleLogout={hendleLogout} />
        </div>
      </div>
    </div>
  );
}
