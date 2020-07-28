import React, { useState } from "react";
import "./ChatScreen.css";

import Avatar from "@material-ui/core/Avatar";

function ChatScreen(props) {
    const [input, setInput] =  useState({})
  const [messages, setMessages] = useState([
    {
      name: "Pushpendra",

      image:
        "https://consequenceofsound.net/wp-content/uploads/2020/05/Grimes-and-Elon-Musk.jpg?quality=80&w=807",
      message: "Wats up",
    },
    {
      name: "Pushpendra",

      image:
        "https://consequenceofsound.net/wp-content/uploads/2020/05/Grimes-and-Elon-Musk.jpg?quality=80&w=807",
      message: "How is Going",
    },
    {
      message: "Heyyy",
    },
  ]);

  const handleClick = (e) => {
      e.preventDefault()
      setMessages([...messages ,{message:input}]);

      setInput('')


  }
  return (
    <div className="chatScreen">
      <h2>Chat Screen</h2>
      <p className="chatScreen_timestamp">
        You mached with ellon on : 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="charScreen__message">
            <Avatar
              alt={message.name}
              src={message.image}
              className="chatScreen__image"
            />

            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="charScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div >
          <form  className="charScreen__input">
              <input value={input} onChange={e => setInput(e.target.value)} className="charScreen__inputField" />
              <button type="submit" onClick={handleClick} className="charScreen__inputButton">Send</button>
          </form>
      </div>
    </div>
  );
}

export default ChatScreen;
