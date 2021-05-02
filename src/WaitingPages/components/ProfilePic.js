import React from 'react';
import profile from '../../images/profile.png';

export default function ProfilePic() {
  return (
    <div>
      <img src={profile} className="profile_img" alt="프로필사진" />
    </div>
  );
}
