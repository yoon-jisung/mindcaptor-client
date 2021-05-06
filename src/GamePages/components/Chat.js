import TextField from '@material-ui/core/TextField';

export default function Chat({ chat, onMessageSubmit, onTextChange, state }) {
  const throttle = (callback, delay) => {
    let previousCall = new Date().getTime();
    return function () {
      const time = new Date().getTime();
      console.log('실행되니 ????');
      if (time - previousCall >= delay) {
        previousCall = time;
        callback();
      }
    };
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onMessageSubmit(e);
    }
  };

  return (
    <div className="card">
      <div className="render-chat">
        <h1>Chat Log</h1>

        {chat.map(({ name, message }, index) => {
          return (
            <div key={index}>
              <h3>
                {name}: <span>{message}</span>
              </h3>
            </div>
          );
        })}
      </div>

      <form onSubmit={onMessageSubmit}>
        <input type="text"></input>
        <div className="msgBtn">
          <input
            onKeyPress={handleKeyPress}
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
