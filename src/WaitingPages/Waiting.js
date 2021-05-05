import React, { useEffect } from 'react';
import UserInfo from './components/UserInfo';
import ProfilePic from './components/ProfilePic';
import EntryGame from './components/EntryGame';
import CreateGame from './components/CreateGame';
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
  useEffect(() => {
    loginCheck(isLogIn);
  }, []);

  return (
    <div>
      <div className="waiting">
        <div className="waiting_box">
          <ProfilePic />
          <UserInfo accessToken={accessToken} userInfo={userInfo} />
        </div>
        <div className="waiting_btns">
          <EntryGame />
          <CreateGame />
          <MyPageBtn />
        </div>
        <div className="waiting_signout_btn">
          <Signout isLogIn={isLogIn} hendleLogout={hendleLogout} />
        </div>
      </div>
    </div>
  );
}
