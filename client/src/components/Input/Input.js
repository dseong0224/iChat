import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="iChat"
      value={message}
      onChange={event => setMessage(event.target.value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <div className="button-container">
      <button className="sendButton" onClick={event => sendMessage(event)}>
        >>
      </button>
    </div>
  </form>
);

export default Input;
