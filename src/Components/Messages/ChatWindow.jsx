
import React, { useState } from "react";
import { AiOutlineSend, AiOutlineInfoCircle } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

export default function ChatWindow({ chat }) {
  const [inputText, setInputText] = useState("");

  if (!chat) {
    return (
      <div className="chat-window__empty">
        <div className="empty-icon-circle">
          <RiMessengerLine className="empty-icon" />
        </div>
        <div className="empty-title">Your messages</div>
        <div className="empty-desc">Send private photos and messages to a friend or group.</div>
        <button className="send-msg-btn">
          Send message
        </button>
      </div>
    );
  }

  return (
    <div className="chat-window">
      <div className="chat-window__header">
        <img src={chat.avatar} alt={chat.name} className="chat-item__avatar" style={{ width: 44, height: 44 }} />
        <div className="chat-window__header-name">{chat.name}</div>
        <AiOutlineInfoCircle style={{ marginLeft: 'auto', fontSize: 24, cursor: 'pointer' }} />
      </div>

      <div className="chat-window__messages">
        {chat.messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-bubble ${msg.sender === "me" ? "message-bubble--me" : "message-bubble--other"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-window__input-container">
        <div className="chat-window__input-wrapper">
          <input
            type="text"
            className="chat-window__input"
            placeholder="Message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {inputText && (
            <button className="chat-window__send-btn">Send</button>
          )}
        </div>
      </div>
    </div>
  );
}
