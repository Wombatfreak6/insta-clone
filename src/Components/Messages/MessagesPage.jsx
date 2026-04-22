
import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";
import { MOCK_CHATS, MOCK_NOTES } from "./mockData";
import { BiEdit, BiChevronDown, BiSearch, BiX } from "react-icons/bi";
import "./MessagesPage.css";

export default function MessagesPage() {
  const [chats, setChats] = useState(MOCK_CHATS);
  const [activeChatId, setActiveChatId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const account = JSON.parse(localStorage.getItem("Account") || "{}");
  const username = account.username || "Hamza Ali Mazari";

  const activeChat = chats.find((c) => c.id === activeChatId);

  const handleSendMessage = (chatId, text) => {
    const newMessage = {
      id: Date.now(),
      sender: "me",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChats(prevChats => {
      const chatIndex = prevChats.findIndex(c => c.id === chatId);
      if (chatIndex === -1) return prevChats;

      const updatedChat = {
        ...prevChats[chatIndex],
        messages: [...prevChats[chatIndex].messages, newMessage],
        lastMessage: text,
        timestamp: "Just now"
      };

      const otherChats = prevChats.filter(c => c.id !== chatId);
      return [updatedChat, ...otherChats];
    });
  };

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
        </section>

        <nav className="messages-subheader">
          <h2 className="subheader-title">Messages</h2>
          <button className="requests-link">Requests</button>
        </nav>

        <div className="chat-sidebar__list-container">
          <ChatList
            chats={chats}
            activeChatId={activeChatId}
            onChatSelect={setActiveChatId}
          />
        </div>
      </div>
      <ChatWindow 
        chat={activeChat} 
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}
