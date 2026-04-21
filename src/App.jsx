import { useState } from "react";
import "./App.css";

import Auth from "./Components/Auth";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Components/Home/HomePage";
import ProfilePage from "./Components/Profile/ProfilePage";
import SearchPage from "./Components/Search/SearchPage";
import MessagesPage from "./Components/Messages/MessagesPage";

export default function App() {
  const [authed, setAuthed] = useState(() => !!localStorage.getItem("Account"));
  const [activePage, setActivePage] = useState("home");

  if (!authed) {
    return <Auth onAuthSuccess={() => setAuthed(true)} />;
  }

  const isMessagesPage = activePage === "messages";

  return (
    <div className={`app-container ${isMessagesPage ? "layout--messages" : ""}`}>
      <div
        className="sidebar-wrapper"
        style={{
          width: isMessagesPage ? "var(--sidebar-width-collapsed)" : "var(--sidebar-width)",
          transform: activePage === "search" ? "translateX(-100%)" : "translateX(0)"
        }}
      >
        <Sidebar 
          activePage={activePage} 
          onNavigate={setActivePage} 
          isCollapsed={isMessagesPage} 
        />
      </div>

      <SearchPage
        isOpen={activePage === "search"}
        onClose={() => setActivePage("home")}
      />

      <main className="main-content">
        {activePage === "profile" ? (
          <ProfilePage />
        ) : activePage === "messages" ? (
          <MessagesPage />
        ) : (
          <HomePage />
        )}
      </main>
    </div>
  );
}