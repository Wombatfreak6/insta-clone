
import React from "react";

export default function ChatList({ chats, activeChatId, onChatSelect }) {
  return (
    <div className="chat-sidebar__list">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`chat-item ${activeChatId === chat.id ? "chat-item--active" : ""}`}
          onClick={() => onChatSelect(chat.id)}
        >
          <div className="chat-item__avatar-container">
            <img src={chat.avatar} alt={chat.name} className="chat-item__avatar" />
            {chat.isOnline && <div className="online-indicator" />}
          </div>
          <div className="chat-item__info">
            <div className="chat-item__name">{chat.name}</div>
            <div className="chat-item__meta">
              <span className="chat-item__last-msg">{chat.lastMessage}</span>
              <span className="chat-item__dot">•</span>
              <span className="chat-item__time">{chat.timestamp}</span>
            </div>
          </div>
          {chat.unreadCount > 0 && (
            <div className="unread-dot" />
          )}
        </div>
      ))}
    </div>
  );
}
