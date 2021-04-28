import React, { useState } from 'react';
import Signup from './Signup';

export default function SignupBtn() {
  const [isModalOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="member_signup_btn">
        회원가입
      </button>
      <Signup isOpen={isModalOpen} close={closeModal} />
    </>
  );
}
