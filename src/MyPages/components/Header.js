import React, { useEffect } from 'react';

import ExitBtn from './ExitBtn';
import Complete from './Complete';

export default function Header({ isOpen, closeModal }) {
  useEffect(() => {
    console.log('메세지 송출');
    setTimeout(closeModal(), 4000);
  });

  return (
    <header className="header">
      <h1>김코딩님의 마이페이지</h1>
      <Complete isOpen={isOpen} />
      <ExitBtn />
    </header>
  );
}
