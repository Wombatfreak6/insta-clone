import { useState } from "react";
import Auth from "./Components/Auth";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import ProfilePage from "./Components/Profile/ProfilePage";

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
        {activePage === "profile" ? <ProfilePage /> : <Dashboard />}
      </main>
    </div>
  );
}
