import React from 'react';
import Popup from 'reactjs-popup';

export default function summeryPopUp() {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>Popup content here !!</div>
    </Popup>
  );
}
