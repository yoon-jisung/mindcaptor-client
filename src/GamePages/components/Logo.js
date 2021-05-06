import React from 'react';
import logo from '../../images/main_logo.png';

export default function Logo() {
  return (
    <div className="inGameLogoBox">
      <img src={logo} alt="logo" className="inGameLogo" />
    </div>
  );
}
