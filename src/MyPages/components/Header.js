import React, { useEffect } from 'react';

import ExitBtn from './ExitBtn';
import Complete from './Complete';

export default function Header({ isOpen, nowPhoto, nickname, MyPageSaveData }) {
  return (
    <header className="header">
      <h1>{nickname}님의 마이페이지</h1>
      <Complete isOpen={isOpen} />
      <ExitBtn MyPageSaveData={MyPageSaveData} />
    </header>
  );
}
