
import React, { useState, useRef, useEffect } from "react";
import { 
  AiOutlineInfoCircle, 
  AiOutlineAudio, 
  AiOutlinePicture, 
  AiOutlineHeart 
} from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsCheck2All, BsEmojiSmile } from "react-icons/bs";

export default function ChatWindow({ chat }) {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  if (!chat) {
    return (
      <div className="chat-window__empty">
        <div className="empty-content">
          <div className="empty-icon-circle">
            <RiMessengerLine className="empty-icon" />
          </div>
          <h2 className="empty-title">Your messages</h2>
          <p className="empty-desc">Send private photos and messages to a friend or group.</p>
          <button className="send-msg-btn">
            Send message
          </button>
        </div>
      </div>
    );
  }

  // Group messages by sender for better bubble styling
  const groupedMessages = chat.messages.reduce((acc, msg, idx) => {
    const prevMsg = chat.messages[idx - 1];
    const isSameSender = prevMsg && prevMsg.sender === msg.sender;
    
    if (isSameSender) {
      acc[acc.length - 1].messages.push(msg);
    } else {
      acc.push({ sender: msg.sender, messages: [msg] });
    }
    return acc;
  }, []);

  return (
    <div className="chat-window">
      <header className="chat-window__header">
        <div className="chat-header__left">
          <div className="chat-header__avatar-wrapper">
            <img src={chat.avatar} alt={chat.name} className="chat-header__avatar" />
            <div className="online-indicator mini" />
          </div>
          <div className="chat-header__info">
            <span className="chat-header__name">{chat.name}</span>
            <span className="chat-header__status">Active now</span>
          </div>
        </div>
        <div className="chat-header__actions">
          <button className="header-action-btn" aria-label="Information">
            <AiOutlineInfoCircle />
          </button>
        </div>
      </header>

      <div className="chat-window__messages-container">
        <div className="chat-messages__scroll">
          <div className="chat-user-profile-summary">
            <img src={chat.avatar} alt={chat.name} className="summary-avatar" />
            <h3 className="summary-name">{chat.name}</h3>
            <span className="summary-username">Instagram · {chat.name.toLowerCase().replace(/\s/g, '')}</span>
            <button className="view-profile-btn">View profile</button>
          </div>

          {groupedMessages.map((group, gIdx) => (
            <div key={gIdx} className={`message-group ${group.sender === "me" ? "group--me" : "group--other"}`}>
              {group.sender === "other" && (
                <img src={chat.avatar} alt={chat.name} className="group-avatar" />
              )}
              <div className="group-bubbles">
                {group.messages.map((msg, mIdx) => (
                  <div
                    key={msg.id}
                    className={`message-bubble ${mIdx === 0 ? "bubble--first" : ""} ${mIdx === group.messages.length - 1 ? "bubble--last" : ""} ${group.messages.length === 1 ? "bubble--single" : ""}`}
                    title={msg.timestamp}
                  >
                    <span className="bubble-text">{msg.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <footer className="chat-window__input-area">
        <div className="chat-input__wrapper">
          <button className="input-action-btn emoji-btn">
            <BsEmojiSmile />
          </button>
          <input
            type="text"
            className="chat-input__field"
            placeholder="Message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="chat-input__actions">
            {!inputText ? (
              <>
                <button className="input-action-btn"><AiOutlineAudio /></button>
                <button className="input-action-btn"><AiOutlinePicture /></button>
                <button className="input-action-btn"><AiOutlineHeart /></button>
              </>
            ) : (
              <button className="input-send-btn">Send</button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
