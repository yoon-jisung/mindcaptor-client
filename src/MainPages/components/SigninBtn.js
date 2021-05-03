import React, { useState } from 'react';
import Signin from './Signin';

export default function SigninBtn({loginHandler}) {
  const [isModalOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className="member_entry_btn">
        로그인 참가
      </button>
      <Signin loginHandler={loginHandler}isOpen={isModalOpen} close={closeModal} />
    </>
  );
}
