import React from "react";

import "./Message.css";

import ReactEmoji from 'react-emoji';

const Message = ({ message : { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark"><div className="sentText pr-10">{user}: {ReactEmoji.emojify(text)}</div></p>
      </div>
    </div>
  );
};

export default Message;
