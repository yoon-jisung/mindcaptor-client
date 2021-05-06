import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import SearchUser from './components/SearchUser';
import Header from './components/Header';
import axios from 'axios';

import ChangePsw from './components/ChangePsw';
import Character1 from '../images/Character1.png';
import Character2 from '../images/Character2.png';
import Character3 from '../images/Character3.png';
import Character4 from '../images/Character4.png';

function MyPage({ accessToken, refreshTokenRequest, userInfo }) {
  const PhotoData = [Character1, Character2, Character3, Character4];
  const [isOpen, setIsOpen] = useState(false);
  const [isPhotoBoxOpen, setIsPhotoBoxOpen] = useState(false);
  const { nickname, email, profile_image, comment, id } = userInfo;
  const [PhotoNum, setPhotoNum] = useState(0);
  const [nowPhoto, setPhoto] = useState(PhotoData[profile_image]);
  const [text, setText] = useState(null);

  // const emailInputValue = (e) => {
  //   setEmail(e.target.value);
  // };

  // const passwordInputValue = (e) => {
  //   setPassword(e.target.value);
  // };

  // const nickNameInputValue = (e) => {
  //   setNickName(e.target.value);
  // };

  const ChangeInputPhoto = function (photo) {
    // e.preventDefault();
    setPhoto(photo);
    setPhotoNum(PhotoData.indexOf(nowPhoto));
    console.log(PhotoNum);
    if (photo !== nowPhoto) {
      openModal();
    }
    //MyPageSaveData()
  };
  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  const handlePhotoBox = () => {
    if (isPhotoBoxOpen) {
      setIsPhotoBoxOpen(false);
    } else {
      setIsPhotoBoxOpen(true);
    }
    console.log('photobox', isPhotoBoxOpen);
  };

<<<<<<< HEAD
  const MyPageSaveData = async (PhotoNum) => {
    refreshTokenRequest();
    const SavePhoto = await axios.post(
      `http://localhost:4000/mypage/${id}/profile`,
      { new_profile: PhotoNum },
      {
        headers: {
          Authorization: `Bearer ${accessToken.accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    const SaveComment = await axios.post(
      `http://localhost:4000/mypage/${id}/comment`,
      { Comment: '아니라어민어리ㅏㅁㄴ얼' },
      {
        headers: {
          Authorization: `Bearer ${accessToken.accessToken}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
  };
=======
  // const MyPageSaveData = async (PhotoNum) => {
  //   await refreshTokenRequest();
  //   const SavePhoto = await axios.post(
  //     `http://localhost:4000/mypage/${id}/profile`,
  //     { new_profile: PhotoNum },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken.accessToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //       //withCredentials: true,
  //     }
  //   );
  //   const SaveComment = await axios.post(
  //     `http://localhost:4000/mypage/${id}/comment`,
  //     { Comment: '아니라어민어리ㅏㅁㄴ얼' },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken.accessToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //       //withCredentials: true,
  //     }
  //   );
  // };
>>>>>>> a5771eaba281de9abd8e0bf97642c16df821de90

  return (
    <div>
      <Header
        isOpen={isOpen}
        nowPhoto={nowPhoto}
        nickname={nickname}
        PhotoNum={PhotoNum}
<<<<<<< HEAD
        MyPageSaveData={MyPageSaveData}
=======
        // MyPageSaveData={MyPageSaveData}
>>>>>>> a5771eaba281de9abd8e0bf97642c16df821de90
      />
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
              <textarea placeholder={`클릭하여 자신을 소개해 보세요!`} />
            </div>
          </div>
          <SearchUser />
        </div>
        {
          <section className="UserProFile">
            <div>
              <div className="ProfilePhotos">
                {PhotoData.map((photo, idx) => (
                  <div>
                    <img
                      style={{ opacity: isPhotoBoxOpen ? '1' : '0' }}
                      className={`profileImg${idx}`}
                      src={photo}
                      alt="프로필사진"
                      onClick={() => ChangeInputPhoto(photo)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        }
      </content>
    </div>
  );
}

export default withRouter(MyPage);
