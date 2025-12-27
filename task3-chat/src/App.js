import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    setChat([...chat, message]);
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>Chat App</h2>

      <div style={{ marginBottom: 20 }}>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>

      <input
        placeholder="Type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
