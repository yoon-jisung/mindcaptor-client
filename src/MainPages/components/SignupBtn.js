import React, { useState, useEffect } from 'react';
import Signup from './Signup';

export default function SignupBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleESC = (e) => {
    if (e.keyCode === 27) {
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
      <button onClick={openModal} className="member_signup_btn">
        회원가입
      </button>
      <Signup isOpen={isOpen} close={closeModal} />
    </>
  );
}
