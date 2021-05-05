import React, { useState, useEffect } from 'react';
import moment from 'moment';
import TextField from '@material-ui/core/TextField';

export default function Chat({
  chat,
  onMessageSubmit,
  onTextChange,
  state,
  renderChat,
}) {
  console.log(chat);

  return (
    <div className="card">
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>

      <form onSubmit={(e) => onMessageSubmit(e)}>
        <div className="msgBtn">
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
      </form>
    </div>
  );
}
