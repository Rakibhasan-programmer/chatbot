import React, { useState } from "react";
import chatbotImage from "../assets/chatbot.png";
import ChatMessage from "./ChatMessage";
import { analyze } from "../utils";
const ChatBot = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState([{ message: "Name?" }]);

  // showing message
  const sendMessage = () => {
    let list = [...message, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [...list, { message: `Hi ${text}, How can i help you?` }];
    }
    setMessage(list);
    setText("");
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img style={{ height: "7rem" }} src={chatbotImage} alt="" />
        <h2 className="text-primary">ChatBot</h2>
      </div>
      <div class="container w-75 mx-auto chat-message-box p-5">
        {message.length > 0 && message.map((data) => <ChatMessage {...data} />)}
        <div className="d-flex mt-2">
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
