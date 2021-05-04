import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Main from './MainPages/main';
import Waiting from './WaitingPages/Waiting';
import MyPage from './MyPages/MyPage';
import InGame from './GamePages/InGame';
const axios = require('axios');

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [accessToken, setAccessToken] = useState({ accessToken: '' });

  const loginHandler = (data) => {
    setIsLogIn(true);
    issueAccessToken(data.data.accessToken);
  };

  const issueAccessToken = (token) => {
    setAccessToken({ accessToken: token });
    console.log(token);
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    console.log(authorizationCode);
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);

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
