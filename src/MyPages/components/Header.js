import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExitBtn from './ExitBtn';

export default function Header() {
  const history = useHistory();
  return (
    <header className="header">
      <h1>김코딩님의 마이페이지</h1>
      <ExitBtn />
    </header>
  );
}
