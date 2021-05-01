import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ExitBtn from './ExitBtn';
import Complete from './Complete';

export default function Header({ isOpen, closeModal }) {
  const history = useHistory();

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
