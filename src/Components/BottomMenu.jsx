
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Sidebar.css";

export default function BottomMenu({ isCollapsed }) {
  return (
    <div className="sidebar-bottom">
      <button className="nav-item" title={isCollapsed ? "More" : undefined}>
        <span className="nav-item__icon">
          <HiOutlineMenuAlt2 />
        </span>
        {!isCollapsed && <span className="nav-item__label">More</span>}
      </button>
    </div>
  );
}
