import React from 'react';

export default function SocialLogin() {
  const socialLoginHandler = () => {
    const url = `https://accounts.google.com/o/oauth2/auth?client_id=970331179604-upa291p2st8pmj3676qmnm4geurg21cb.apps.googleusercontent.com&redirect_uri=http://localhost:3000&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile email`;

    window.location.assign(url);
  };
  return (
    <div>
      <div className="social_box">
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans"
        />
        <div className="google-btn" onClick={socialLoginHandler}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </div>
  );
}
