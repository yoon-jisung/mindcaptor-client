import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './MainPages/main';
import Waiting from './WaitingPages/Waiting';
import MyPage from './MyPages/MyPage';
import InGame from './GamePages/InGame';
import Character1 from './images/Character1.png';
import { useHistory } from 'react-router-dom';
import './main.css';
import Bgm from './Bgm';

const axios = require('axios');

export default function App() {
  //const [isLogIn, setIsLogIn] = useState(false);
  //localStorage.setItem('isLogIn',false)
  const [accessToken, setAccessToken] = useState({ accessToken: null });
  const [userInfo, setUserInfo] = useState({
    id: null,
    nickname: null,
    email: null,
    profile_image: Character1,
    comment: null,
    room_id: null,
  });
  const history = useHistory();

  //로그인 상태 관리하기--------------------------------
  useEffect(() => {
    //refreshTokenRequest()
    if (accessToken.accessToken !== null) {
      history.push('/Waiting');
    }
  }, []);

  const loginHandler = (data) => {
    issueAccessToken(data.data.accessToken);
    history.push('/Waiting');
  };

  const handleGuestLogin = () => {
    setUserInfo({ nickname: '게스트' });
    history.push('/Waiting');
  };
  //로그 아웃--------------------------------------------------------
  const hendleLogout = () => {
    axios

      .get('http://localhost:4000/user/logout', { withCredentials: true })
      .then((res) => {});
    setUserInfo({
      id: null,
      nickname: null,
      email: null,
      profile_image: Character1,
      comment: null,
      room_id: null,
    });
    setAccessToken({ accessToken: null });
    history.push('/');
  };

  //토큰 관리----------------------------------------------------------------------------------------------
  const accessTokenRequest = (accessToken) => {
    // ! 유저 정보를 알려달라는 코드
    axios
      .get('http://localhost:4000/accessTokenHandler', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
<<<<<<< HEAD
=======
        const { nickname, email, profile_image, comment, id } = res.data.data;
>>>>>>> a5771eaba281de9abd8e0bf97642c16df821de90
        // !
        return res.data.data;
      })
      .then((data) => {
        console.log('여기야야야야양', data);
        const { nickname, email, profile_image, comment, id } = data;
        setUserInfo({
          id: id,
          nickname: nickname,
          email: email,
          profile_image: profile_image,
          comment: comment,
        });
      });
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
    };
  }, [userInfo]);

  const refreshTokenRequest = () => {
    // ! 일정 주기로 함수 계속 보냄
    axios
      .get('http://localhost:4000/refreshTokenHandler', {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.message !== 'ok') {
        }
        const {
          nickname,
          email,
          profile_image,
          id,
          comment,
        } = res.data.data.userInfo;

<<<<<<< HEAD
        setAccessToken({ accessToken: res.data.data.accessToken });
=======

        if (res.data.message !== 'ok') {}
        const { nickname, email, profile_image, id,comment } = res.data.data.userInfo;
        console.log(res.data.data.accessToken)
        setAccessToken({accessToken:res.data.data.accessToken})

>>>>>>> a5771eaba281de9abd8e0bf97642c16df821de90
        setUserInfo({
          id: id,
          nickname: nickname,
          email: email,
          comment: comment,
          profile_image: profile_image,
        });
      });
  };

  const issueAccessToken = (token) => {
    setAccessToken({ accessToken: token });
    accessTokenRequest(token);
    history.push('/Waiting');
  };
  //구글 로그인----------------------------------------------------------------

  const getAccessToken = async (authorizationCode) => {
    // ! 구글 로그인
    let resp = await axios.post(
      'http://localhost:4000/googlelogin',
      {
        authorizationCode: authorizationCode,
      },
      {
        withCredentials: true,
      }
    );
<<<<<<< HEAD

=======
>>>>>>> a5771eaba281de9abd8e0bf97642c16df821de90
    issueAccessToken(resp.data.accessToken);
  };
  //구글 로그인 코드 받기--------------------------------
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
<<<<<<< HEAD

    console.log('userInfo:', userInfo);
=======
>>>>>>> a5771eaba281de9abd8e0bf97642c16df821de90
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  });

  return (
    <div>
      <Bgm />
      <Switch>
        <Route
          path="/Waiting"
          render={() => (
            <Waiting
              //isLogIn={isLogIn}
              refreshTokenRequest={refreshTokenRequest}
              hendleLogout={hendleLogout}
              userInfo={userInfo}
              accessToken={accessToken}
            />
          )}
        />
        <Route
          path="/MyPage"
          render={() => (
            <MyPage
              //isLogIn={isLogIn}
              refreshTokenRequest={refreshTokenRequest}
              userInfo={userInfo}
              accessToken={accessToken}
            />
          )}
        />
        <Route
          path="/room"
          render={() => (
            <InGame
              //isLogIn={isLogIn}
              refreshTokenRequest={refreshTokenRequest}
              userInfo={userInfo}
              accessToken={accessToken}
            />
          )}
        />
        <Route
          path="/"
          exact={true}
          render={() => (
            <Main
              loginHandler={loginHandler}
              handleGuestLogin={handleGuestLogin}
            />
          )}
        />
      </Switch>
    </div>
  );
}
