import React, { useState } from 'react';
import '../../main.css';
import logo from '../../images/mindcaptor_logo1.png';
import { useHistory, withRouter, Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const axios = require('axios');

export default function Signin({ isOpen, close, loginHandler }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const emailInputValue = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputValue = (e) => {
    setPassword(e.target.value);
  };

  // const handleSignin = () => {
  //   history.push('/Waiting');
  // };

  const loginRequestHandler = () => {
    history.push('/Waiting');

    axios
      .post(
        'http://localhost:4000/login',
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        loginHandler(res.data);
        history.push('/Waiting');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isOpen ? (
        <div className="container_singin">
          <div className="signin">
            <div className="close">
              <span
                type="button"
                aria-label="Close"
                className="signin_exit"
                onClick={close}
              >
                &times;
              </span>
            </div>
            <div className="signin_box">
              <box className="logo_box">
                <img src={logo} className="logo"></img>
              </box>
              <input
                name="email"
                className="signin_input"
                type="text"
                placeholder="이메일"
                onChange={emailInputValue}
              />
              <input
                name="password"
                className="signin_input"
                type="password"
                placeholder="패스워드"
                onChange={passwordInputValue}
              />
              <button
                type="submit"
                className="signin_btn"
                onClick={loginRequestHandler}
              >
                로그인
              </button>
              <SocialLogin />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
