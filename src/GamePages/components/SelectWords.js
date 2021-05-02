import React, { useState, useEffect } from 'react';
import Words from '../../Words';

export default function SelectWord() {
  const [Word1, SetWord1] = useState('');
  const [Word2, SetWord2] = useState('');
  const [Word3, SetWord3] = useState('');
  const [Problem, SetProblem] = useState('');
  // ! 단어 3개가 들어감

  const RandomItem = () => {
    SetWord1(Words[Math.floor(Math.random() * Words.length)]);
    SetWord2(Words[Math.floor(Math.random() * Words.length)]);
    SetWord3(Words[Math.floor(Math.random() * Words.length)]);
  };

  useEffect(() => {
    RandomItem();
    SetProblem([Word1, Word2, Word3]);
  }, []);

  return (
    <div className="WordBox">
      {Problem.map((word) => {
        return <button>{word}</button>;
      })}
    </div>
  );
}
