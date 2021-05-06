import React from 'react';

export default function Complete({ isOpen }) {
  console.log(isOpen);
  return (
    <span>
      {
        <div style={{ opacity: isOpen ? '1' : '0' }} className="changedProfile">
          <h3>사진변경이 완료되었습니다.</h3>
        </div>
      }
    </span>
  );
}
