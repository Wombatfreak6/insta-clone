import { useState } from "react";
import "./App.css";

import Auth from "./Components/Auth";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Components/Home/HomePage";
import ProfilePage from "./Components/Profile/ProfilePage";
import SearchPage from "./Components/Search/SearchPage";

export default function App() {
  const [authed, setAuthed] = useState(() => !!localStorage.getItem("Account"));
  const [activePage, setActivePage] = useState("home");

  if (!authed) {
    return <Auth onAuthSuccess={() => setAuthed(true)} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#000" }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main style={{ flex: 1, marginLeft: "245px", minHeight: "100vh", color: "#f5f5f5" }}>
        {activePage === "profile" ? <ProfilePage /> : <HomePage />}
    <div className="app-container">

      <div
        className="sidebar-wrapper"
        style={{
          transform:
            activePage === "search"
              ? "translateX(-100%)"
              : "translateX(0)"
        }}
      >
        <Sidebar activePage={activePage} onNavigate={setActivePage} />
      </div>

      <SearchPage
        isOpen={activePage === "search"}
        onClose={() => setActivePage("home")}
      />

      <main className="main-content">
        {activePage === "profile" && <ProfilePage />}
        <Dashboard />
      </main>

    </div>
  );
}