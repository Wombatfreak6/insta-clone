
import { RiInstagramLine } from "react-icons/ri";
import "./Sidebar.css";

export default function Logo({ isCollapsed }) {
  return (
    <div className="sidebar-logo">
      {isCollapsed ? (
        <RiInstagramLine className="logo-icon" title="Instagram" />
      ) : (
        <span className="logo-text">Instagram</span>
      )}
    </div>
  );
}
