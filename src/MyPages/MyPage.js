import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SearchUser from './components/SearchUser';
import Header from './components/Header';
import ChangePsw from './components/ChangePsw';

import Character1 from '../images/Character1.png';
import Character2 from '../images/Character2.png';
import Character3 from '../images/Character3.png';
import Character4 from '../images/Character4.png';

function MyPage({ accessToken, isLogIn, loginCheck, userInfo }) {
  const PhotoData = [Character1, Character2, Character3, Character4];
  const [nowPhoto, setPhoto] = useState(Character1);
  const [isOpen, setIsOpen] = useState(false);
  const [isPhotoBoxOpen, setIsPhotoBoxOpen] = useState(false);
  const ChangeInputPhoto = function (photo) {
    // e.preventDefault();
    setPhoto(photo);
    if (photo !== nowPhoto) {
      console.log('openModal');
      openModal();
    }
  };
  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  const handlePhotoBox = () => {
    if (isPhotoBoxOpen) {
      setIsPhotoBoxOpen(false);
    } else {
      setIsPhotoBoxOpen(true);
    }
  };

  useEffect(() => {
    return () => {
      loginCheck(isLogIn);
    };
  });

  return (
    <div>
      <Header isOpen={isOpen} nowPhoto={nowPhoto} />
      <content className="container">
        <div className="pro_search_box">
          <div className="introBox">
            <div className="pswBox">
              <div className="proBox">
                <img src={nowPhoto} alt="프로필사진" className="proPhoto" />
                <button className="changeProPhoto" onClick={handlePhotoBox}>
                  편집
                </button>
                <div className="userNickName">
                  닉네임 : {userInfo.nickname}{' '}
                </div>
              </div>
              <ChangePsw />
            </div>
            <div className="intro">
              <h1>자기소개</h1>
              <textarea
                placeholder={`안녕하세요, ${userInfo.nickname}입니다.`}
              />
            </div>
          </div>
          <SearchUser />
        </div>
        {isPhotoBoxOpen ? (
          <section className="UserProFile">
            <div>
              <div className="ProfilePhotos">
                {PhotoData.map((photo) => (
                  <div>
                    <img
                      className="profileImg"
                      src={photo}
                      alt="프로필사진"
                      onClick={() => ChangeInputPhoto(photo)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </content>
    </div>
  );
}

export default withRouter(MyPage);
