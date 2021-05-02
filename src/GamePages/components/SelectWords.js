import React, { useState, useEffect } from 'react';
import Words from '../../Words';

export default function SelectWord() {
  const [Word1, SetWord1] = useState('');
  const [Word2, SetWord2] = useState('');
  const [Word3, SetWord3] = useState('');
  const [Problem, SetProblem] = useState([]);
  // ! 단어 3개가 들어감

  const RandomItem = () => {
    SetWord1(Words[Math.floor(Math.random() * Words.length)]);
    SetWord2(Words[Math.floor(Math.random() * Words.length)]);
    SetWord3(Words[Math.floor(Math.random() * Words.length)]);
  };

  useEffect(() => {
    RandomItem();
  }, []);

  useEffect(() => {
    SetProblem([Word1, Word2, Word3]);
  }, [Word1]);

  return (
    <div className="background">
      <div className="container_WordBox">
        <div className="blankForWordBox" />

        <div className="WordBox">
          <h2 className="selectWord">단어를 선택해주세요.</h2>
          <div className="wordBtns">
            {Problem.map((word, idx) => {
              if (Word1 !== Word2 && Word1 !== Word3 && Word2 !== Word3) {
                return <button key={idx}>{word}</button>;
              } else {
                RandomItem();
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
