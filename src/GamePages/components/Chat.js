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
      <form onSubmit={(e) => onMessageSubmit(e)}>
        <h1>Messenger</h1>

        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
        <div className="render-chat">
          <h1>Chat Log</h1>
          {renderChat()}
        </div>
      </form>
    </div>
  );
}
//!---------------------------------------------------------------
//   const onTextChange = (e) => {
//     // handleSubmit(e);
//     setMsg(e.target.value);
//     setChat({ userId: msg });
//   };

//   const onMessageSubmit = () => {
//     socket.emit('chat message', userId, msg);
//     setChat({ userId: '' });
//   };

//   const renderChat = () => {
//     return chat.map({ userId, msg }, (idx) => (
//       <div key={idx}>
//         <span style={{ color: 'red' }}>{msg}</span>

//         <span>
//           {userId} : {msg}
//         </span>
//       </div>
//     ));
//   };

//   useEffect(() => {
//     socket.on('chat message', (userId, msg) => {
//       setChat(...chat, { userId, msg });
//     });
//   });

//   return (
//     <div className="chatBox">
//       <div className="chat">{renderChat()}</div>
//       <input onChange={(e) => onTextChange(e)} value={msg} />
//       <button onClick={onMessageSubmit}>Send</button>
//     </div>
//   );
// }
// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/* <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form className="w-100" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>채팅창</Form.Label>
            <Button type="submit">Create</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </> */
