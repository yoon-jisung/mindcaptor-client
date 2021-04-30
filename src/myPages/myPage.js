import React, { useState, useEffect } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import ProFile from './components/Profile';
import SerchUser from './components/SerchUser';
import Header from './components/Header';
import './MyPages.css';
import Character1 from '../images/Character1.png';
import Character2 from '../images/Character2.png';
import Character3 from '../images/Character3.png';
import Character4 from '../images/Character4.png';

function MyPage() {
  const [nowPoto, setPoto] = useState(Character1);
  const history = useHistory();

  const ChangeInputPoto = function (poto) {
    setPoto(poto);
  };

  useEffect(() => {
    console.log('프로필이 변경 되었습니다.');
  }, [nowPoto]);

  return (
    <div>
      <Header />
      <content className="container">
        <ProFile ChangeInputPoto={() => ChangeInputPoto()} />
        <div className="serch_user">
          <img src={nowPoto} alt="프로필사진" />
          <SerchUser />
        </div>
      </content>
    </div>
  );
}

export default withRouter(MyPage);
