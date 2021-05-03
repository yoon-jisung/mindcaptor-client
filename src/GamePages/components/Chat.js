import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import moment from 'moment';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const username = prompt('what is your username');

const socket = io.connect('http://localhost:4000', {
  transports: ['websocket', 'polling'],
});

export default function Chat() {
  //   const handleSubmit = (e) => {
  //     e.preventDafault();
  //   };
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('userId', userId);
    });

    socket.on('userId', (users) => {
      setUserId(users);
    });

    socket.on('message', (message) => {
      setChat((chat) => [...chat, message]);
    });
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4 mb-4">
          <h6>Hello {username}</h6>
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
        <div className="col-md-4">
          <h6>Users</h6>
          <ul id="users">
            {users.map(({ name, id }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
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
