import { useState } from "react";
import "./App.css";

import Auth from "./Components/Auth";
import Sidebar from "./Components/Sidebar";
import HomePage from "./Components/Home/HomePage";
import ProfilePage from "./Components/Profile/ProfilePage";
import SearchPage from "./Components/Search/SearchPage";
import Dashboard from "./Components/Dashboard";

export default function App() {
  const [authed, setAuthed] = useState(() => !!localStorage.getItem("Account"));
  const [activePage, setActivePage] = useState("home");

  if (!authed) {
    return <Auth onAuthSuccess={() => setAuthed(true)} />;
  }

  return (
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
        {activePage === "profile" ? <ProfilePage /> : <HomePage />}
      </main>
    </div>
  );
}