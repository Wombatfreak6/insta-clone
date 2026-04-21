
import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { MOCK_CHATS, MOCK_NOTES } from "./mockData";
import { BiEdit, BiChevronDown, BiSearch, BiX } from "react-icons/bi";
import "./MessagesPage.css";

export default function MessagesPage() {
  const [activeChatId, setActiveChatId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const account = JSON.parse(localStorage.getItem("Account") || "{}");
  const username = account.username || "Hamza Ali Mazari";

  const activeChat = MOCK_CHATS.find((c) => c.id === activeChatId);

  return (
    <div className="messages-container">
      <div className="chat-sidebar">
        <header className="chat-sidebar__header">
          <div className="sidebar-header__user">
            <h1 className="username-text">{username}</h1>
            <BiChevronDown className="chevron-icon" />
          </div>
          <button className="new-message-btn" aria-label="New Message">
            <BiEdit className="edit-icon" />
          </button>
        </header>

        <section className="sidebar-search">
          <div className="search-bar">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <BiX 
                className="clear-search-icon" 
                onClick={() => setSearchTerm("")} 
              />
            )}
          </div>
        </section>

        <section className="notes-container">
          <div className="notes-scroll">
            <div className="note-item">
              <div className="note-avatar-wrapper plus-note">
                <img src="https://i.pravatar.cc/150?u=me" alt="Your note" className="note-avatar" />
                <div className="plus-icon">+</div>
              </div>
              <span className="note-name">Your note</span>
            </div>
            {MOCK_NOTES.filter(n => n.id !== 'me').map((note) => (
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
        </section>

        <nav className="messages-subheader">
          <div className="tab-item active">
            <span>Messages</span>
          </div>
          <div className="tab-item">
            <span>Requests</span>
          </div>
        </nav>

        <div className="chat-sidebar__list-container">
          <ChatList
            chats={MOCK_CHATS}
            activeChatId={activeChatId}
            onChatSelect={setActiveChatId}
          />
        </div>
      </div>
      <ChatWindow chat={activeChat} />
    </div>
  );
}
