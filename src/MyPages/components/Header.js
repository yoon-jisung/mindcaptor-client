import React, { useEffect } from 'react';

import ExitBtn from './ExitBtn';
import Complete from './Complete';

export default function Header({ isOpen, closeModal, nowPhoto }) {
  useEffect(() => {
    setTimeout(closeModal, 2000);
  }, [nowPhoto]);

  return (
    <header className="header">
      <h1>김코딩님의 마이페이지</h1>
      <Complete isOpen={isOpen} />
      <ExitBtn />
    </header>
  );
}
