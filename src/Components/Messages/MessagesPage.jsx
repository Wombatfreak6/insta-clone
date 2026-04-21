
import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { MOCK_CHATS, MOCK_NOTES } from "./mockData";
import { BiEdit, BiChevronDown, BiSearch } from "react-icons/bi";
import "./MessagesPage.css";

export default function MessagesPage() {
  const [activeChatId, setActiveChatId] = useState(null);

  const account = JSON.parse(localStorage.getItem("Account") || "{}");
  const username = account.username || "Hamza Ali Mazari";

  const activeChat = MOCK_CHATS.find((c) => c.id === activeChatId);

  return (
    <div className="messages-container">
      <div className="chat-sidebar">
        <div className="chat-sidebar__header">
          <div className="sidebar-header__user">
            <span className="username-text">{username}</span>
            <BiChevronDown className="chevron-icon" />
          </div>
          <BiEdit className="edit-icon" />
        </div>

        <div className="sidebar-search">
          <div className="search-bar">
            <BiSearch className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>

        <div className="notes-container">
          <div className="notes-scroll">
            {MOCK_NOTES.map((note) => (
              <div key={note.id} className="note-item">
                <div className="note-avatar-wrapper">
                  <img src={note.avatar} alt={note.name} className="note-avatar" />
                  <div className="note-bubble">
                    <span className="note-text">{note.note}</span>
                  </div>
                </div>
                <span className="note-name">{note.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="messages-subheader">
          <span className="active-tab">Messages</span>
          <span className="inactive-tab">Requests</span>
        </div>

        <ChatList
          chats={MOCK_CHATS}
          activeChatId={activeChatId}
          onChatSelect={setActiveChatId}
        />
      </div>
      <ChatWindow chat={activeChat} />
    </div>
  );
}
