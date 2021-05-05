import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Main from './MainPages/main';
import Waiting from './WaitingPages/Waiting';
import MyPage from './MyPages/MyPage';
import InGame from './GamePages/InGame';
import Character1 from './images/Character1.png';
import { useHistory } from 'react-router-dom';
const axios = require('axios');
import './main.css';

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [accessToken, setAccessToken] = useState({ accessToken: null });
  const [userInfo, setUserInfo] = useState({
    nickname: null,
    email: null,
    profile_image: Character1,
  });
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
        if (res.data.message !== 'ok') {
          const message =
            'access token이 만료되어 불러올 수 없습니다. refresh token을 사용해주시기 바랍니다.';
          //return setState({ email: message, createdAt: message });
        }

        //console.log(res.message)
        //console.log(res.data.data.userInfo.dataValues)
        const { nickname, email, profile_image } = res.data.data.userInfo;
        // !
        setUserInfo({
          nickname: nickname,
          email: email,
          profile_image: profile_image,
        });
      });
  };

  const refreshTokenRequest = () => {
    // ! 일정 주기로 함수 계속 보냄
    axios
      .get('http://localhost:4000/refreshTokenHandler', {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.message !== 'ok') {
          const message =
            'refresh token이 만료되어 불러올 수 없습니다. 다시 로그인 해주시기 바랍니다.';
          //return this.setState({ email: message, createdAt: message });
        }
        const { nickname, email, profile_image } = res.data.data.userInfo;
        setUserInfo({
          nickname: nickname,
          email: email,
          profile_image: profile_image,
        });
      });
  };

  const loginHandler = (data) => {
    // !
    setIsLogIn(true);
    issueAccessToken(data.data.accessToken);
  };

  const issueAccessToken = (token) => {
    setAccessToken({ accessToken: token });
    accessTokenRequest(token);
    console.log(token);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  });

  const getAccessToken = async (authorizationCode) => {
    let resp = await axios.post('http://localhost:4000/googlelogin', {
      authorizationCode: authorizationCode,
    });
    setAccessToken({ accessToken: resp.data.accessToken });
  };
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact={true}
          render={() => <Main loginHandler={loginHandler} />}
        />
        <Route
          path="/Waiting"
          render={() => <Waiting accessToken={accessToken} />}
        />
        <Route path="/" exact={true} render={() => <Main />} />
        <Route path="/Waiting" render={() => <Waiting />} />
        <Route path="/MyPage" render={() => <MyPage />} />
        <Route path="/room" render={() => <InGame />} />
      </Switch>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
