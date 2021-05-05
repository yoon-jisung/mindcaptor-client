import React, { useState } from 'react';
import '../../main.css';
import logo from '../../images/mindcaptor_logo1.png';
import { useHistory } from 'react-router-dom';
const axios = require('axios');

export default function Signin({ isOpen, close, loginHandler }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const url = `https://accounts.google.com/o/oauth2/auth?client_id=970331179604-upa291p2st8pmj3676qmnm4geurg21cb.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile email`;

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
    //history.push('/Waiting');

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
        //history.push('/Waiting');
      })
      .catch((err) => console.log(err));
  };

  const socialLoginHandler = () => {
    window.location.assign(url);
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
              <button className="signin_btn" onClick={loginRequestHandler}>
                로그인
              </button>
            </div>
            <div className="social_box">
              <div onClick={socialLoginHandler} className="social_btn">
                구글
              </div>
              <div className="social_btn">카카오</div>
              <div className="social_btn">네이버</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
