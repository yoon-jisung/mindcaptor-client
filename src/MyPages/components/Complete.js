import React from 'react';

export default function Complete({ isOpen, close }) {
  return (
    <span>
      {isOpen ? (
        <span>
          <h3>사진변경이 완료되었습니다.</h3>
        </span>
      ) : null}
    </span>
  );
}
