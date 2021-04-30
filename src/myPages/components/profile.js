import React, { useState } from 'react';
import Slider from './Slider';

export default function ProFile() {
  return (
    <section className="UserProFile">
      <div>
        <buttton>편집</buttton>
        프로필 사진 변경
        <Slider />
      </div>
    </section>
  );
}
