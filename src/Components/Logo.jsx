
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
