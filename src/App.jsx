// App.jsx
// Root component.
// Controls authentication state and decides whether to show the Auth page
// or the main dashboard (which includes the Sidebar).

import { useState } from "react";
import Auth from "./Components/Auth";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";

export default function App() {
  // isAuthenticated drives the entire app's view state.
  // No router needed for this single-page demo.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleAuthSuccess() {
    setIsAuthenticated(true);
  }

  // Before login: show only the Auth page, Sidebar must not be visible.
  if (!isAuthenticated) {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  }

  // After login: full layout with Sidebar + main content area.
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#000" }}>
      <Sidebar />
      <main style={{ flex: 1, marginLeft: "245px", padding: "20px", color: "#f5f5f5" }}>
        <Dashboard />
      </main>
    </div>
  );
}
