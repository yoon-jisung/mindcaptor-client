import React from 'react';
import logo from '../../images/mindcaptor_logo_wait.png';

export default function ProfilePic() {
  return (
    <div>
      <img src={logo} className="profile_img" alt="프로필사진" />
    </div>
  );
}
