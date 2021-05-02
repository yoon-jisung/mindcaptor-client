import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Main from './MainPages/main';
import Waiting from './WaitingPages/Waiting';
import MyPage from './MyPages/MyPage';
import InGame from './GamePages/InGame';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true} render={() => <Main />} />
        <Route path="/Waiting" render={() => <Waiting />} />
        <Route path="/MyPage" render={() => <MyPage />} />
        <Route path="/InGame" render={() => <InGame />} />
      </Switch>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
