import React, { usestate } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import ProFile from './components/ProFile';
import SerchUser from './components/SerchUser';
import Header from './components/Header';
import './MyPages.css';

function MyPage() {
  const history = useHistory();
  return (
    <div>
      <Header />
      <content className="container">
        <ProFile />
        <SerchUser />
      </content>
    </div>
  );
}

export default withRouter(MyPage);
