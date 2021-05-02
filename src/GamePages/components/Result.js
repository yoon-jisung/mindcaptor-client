import React from 'react';
import Timer from './Timer';
import Winner from './Winner';
// 타이머가 0이되면 종료
export default function Result() {
  return (
    <div>
      <div className="result">
        <div className="res_header">Result</div>
        <div className="res_body">
          <div className="res_body_header">정답을 맞춘 사람은 누구일까요?</div>
          <div className="res_body_winner">
            <Winner />
          </div>
        </div>
      </div>
    </div>
  );
}
