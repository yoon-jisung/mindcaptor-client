import React, { useState } from 'react';

import BGM from './bgms/bgm1.mp3';
import useSound from 'use-sound';

export default function Bgm() {
  //!bgm
  const [play, { stop }] = useSound(BGM);
  const [bgmOff, setBgmOff] = useState(false);

  const handleBGM = () => {
    if (bgmOff) {
      setBgmOff(false);
      stop();
    } else {
      setBgmOff(true);
      play();
    }
  };
  return (
    <div>
      {bgmOff ? (
        <button className="bgm" onClick={handleBGM}>
          On
        </button>
      ) : (
        <button className="bgm" onClick={handleBGM}>
          Off
        </button>
      )}
    </div>
  );
}
