import TextField from '@material-ui/core/TextField';

export default function Chat({
  chat,
  onMessageSubmit,
  onTextChange,
  state,
  renderChat,
}) {
  return (
    <div className="card">
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>

      <form onSubmit={onMessageSubmit}>
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
