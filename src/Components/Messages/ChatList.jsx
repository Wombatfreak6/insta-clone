
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
          <img src={chat.avatar} alt={chat.name} className="chat-item__avatar" />
          <div className="chat-item__info">
            <div className="chat-item__name">{chat.name}</div>
            <div className="chat-item__last-msg">
              {chat.lastMessage} • {chat.timestamp}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
