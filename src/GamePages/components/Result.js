import React from 'react';
import Winner from './Winner';
// 타이머가 0이되면 종료
export default function Result({ winner }) {
  return (
    <div>
      <div className="result">
        <div className="res_header">Result</div>
        <div className="res_body">
          <div className="res_body_header">정답을 맞춘 사람은 누구일까요?</div>
          <div className="res_body_winner">
            <Winner winner={winner} />
          </div>
        </div>
      </div>
    </div>
  );
}
