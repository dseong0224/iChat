import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        iChatt, iMessage Replica 
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Built using React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>current users:</h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="aciveItem">
                {name}
                <img src={onlineIcon} alt="Online Icon" />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
