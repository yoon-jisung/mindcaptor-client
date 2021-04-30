import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  return (
    <header className="header">
      <span>
        <h1>마이페이지</h1>
      </span>
      <span onClick={() => history.push('/Waiting')}>나가기</span>
    </header>
  );
}
