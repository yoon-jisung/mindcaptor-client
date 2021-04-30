import React, { usestate } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import ProFile from './components/Profile';
import SerchUser from './components/SerchUser';
import Header from './components/Header';
import './MyPages.css';
import Character1 from '../images/Character1.png';

function MyPage() {
  // const [nowPoto, setPoto] = usestate(Character1);
  const history = useHistory();

  return (
    <div>
      <Header />
      <content className="container">
        <ProFile />
        <div className="serch_user">
          <img src={Character1} alt="프로필사진" />
          <SerchUser />
        </div>
      </content>
    </div>
  );
}

export default withRouter(MyPage);
