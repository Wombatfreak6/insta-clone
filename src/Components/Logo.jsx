import { RiInstagramLine } from "react-icons/ri";
import "./Sidebar.css";

export default function Logo() {
  return (
    <div className="sidebar-logo">
      <RiInstagramLine className="logo-icon" title="Instagram" />
      <span className="logo-text">Instagram</span>
    </div>
  );
}
