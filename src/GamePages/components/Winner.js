import React from 'react';
// 테스트
export default function Winner({ winner }) {
  return (
    <div>
      {winner.map((el) => {
        <div className="winner">{el}</div>;
      })}
    </div>
  );
}
