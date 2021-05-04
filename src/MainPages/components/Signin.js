import React, { useState } from 'react';
import '../../main.css';
import logo from '../../images/mindcaptor_logo_login.png';
import { useHistory, withRouter, Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const axios = require('axios');

export default function Signin({ isOpen, close, loginHandler }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigin, setIsSignin] = useState(true);
  const [isNone, setIsNone] = useState(true);
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
    // history.push('/Waiting');

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
      .catch((err) => {
        if (err) {
          setIsNone(false);
          setTimeout(() => {
            setIsNone(true);
          }, 2000);
        }
      });
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
              <div className="logo_box">
                <img src={logo} className="logo_sign" alt="siginin" />
              </div>
              <div
                className="failed_sginin"
                style={{ opacity: isNone ? '0' : '1' }}
              >
                이메일과 비밀번호를 확인해주세요.
              </div>

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
