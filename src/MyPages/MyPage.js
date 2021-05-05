import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SearchUser from './components/SearchUser';
import Header from './components/Header';

import Character1 from '../images/Character1.png';
import Character2 from '../images/Character2.png';
import Character3 from '../images/Character3.png';
import Character4 from '../images/Character4.png';

import './MyPages.css';

function MyPage({ accessToken, isLogIn, loginCheck, userInfo }) {
  const PotoData = [Character1, Character2, Character3, Character4];
  const [nowPoto, setPoto] = useState(Character1);
  const [isModalOpen, setOpen] = useState(false);

  const ChangeInputPoto = function (el) {
    // e.preventDefault();
    setPoto(el);
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('프로필이 변경 되었습니다.');
    openModal();
  }, [nowPoto]);

  useEffect(() => {
    return () => {
      loginCheck(isLogIn);
    };
  });

  return (
    <div>
      <Header isOpen={isModalOpen} closeModal={() => closeModal} />
      <content className="container">
        <section className="UserProFile">
          <div>
            <div className="ProfilePotos">
              {PotoData.map((el) => (
                <div>
                  <img src={el} alt="프로필사진" />
                  <div>
                    <button onClick={() => ChangeInputPoto(el)}>선택</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="serch_user">
          <img src={nowPoto} alt="프로필사진" />
          <SearchUser />
        </div>
      </content>
    </div>
  );
}

export default withRouter(MyPage);
