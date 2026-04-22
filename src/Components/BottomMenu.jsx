import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Sidebar.css";

export default function BottomMenu() {
  return (
    <div className="sidebar-bottom">
      <button className="nav-item">
        <span className="nav-item__icon">
          <HiOutlineMenuAlt2 />
        </span>
        <span className="nav-item__label">More</span>
      </button>
    </div>
  );
}
