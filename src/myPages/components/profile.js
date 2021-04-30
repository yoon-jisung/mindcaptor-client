import React, { useState } from 'react';
import ProfilePoto from './ProfilePoto';

export default function ProFile({ ChangeInputPoto }) {
  return (
    <section className="UserProFile">
      <div>
        <ProfilePoto ChangeInputPoto={ChangeInputPoto} />
      </div>
    </section>
  );
}
