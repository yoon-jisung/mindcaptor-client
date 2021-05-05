import React, { useState, useEffect } from 'react';
import Signin from './Signin';

export default function SigninBtn({ loginHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = (e) => {
    setIsOpen(false);
  };

  const handleESC = (e) => {
    if (e.keyCode === 27) {
      console.log(isOpen);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleESC, false);
    return () => {
      document.removeEventListener('keydown', handleESC, false);
    };
  }, []);

  return (
    <>
      <button onClick={openModal} className="member_entry_btn">
        로그인 참가
      </button>
      <Signin loginHandler={loginHandler} isOpen={isOpen} close={closeModal} />
    </>
  );
}
