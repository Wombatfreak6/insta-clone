// Logo.jsx
// Displays the Instagram wordmark at the top of the sidebar.
// On collapsed (icon-only) mode, it hides the text and shows a camera icon instead.

import { RiInstagramLine } from "react-icons/ri";
import "./Sidebar.css";

export default function Logo({ collapsed }) {
  return (
    <div className="sidebar-logo">
      {collapsed ? (
        <RiInstagramLine className="logo-icon" />
      ) : (
        <span className="logo-text">Instagram</span>
      )}
    </div>
  );
}
