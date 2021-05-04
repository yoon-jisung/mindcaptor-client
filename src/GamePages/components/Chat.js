import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Container, Form, Button, Modal } from 'react-bootstrap';

export default function Chat({ user, message, messages, submit, setMessage }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4 mb-4">
          <h6>Hello {user}</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h6>Messages</h6>

          <div id="messages">
            {messages.map(({ user, date, text }, index) => (
              <div key={index} className="row mb-2">
                <div className="col-md-3">
                  {moment(date).format('h:mm:ss a')}
                </div>
                <div className="col-md-2">{user.name}</div>
                <div className="col-md-2">{text}</div>
              </div>
            ))}
          </div>

          <form onSubmit={submit} id="form">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
                id="text"
              />

              <span className="input-group-btn">
                <button id="submit" type="submit" className="btn btn-primary">
                  Send
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
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
