
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Sidebar.css";

export default function BottomMenu({ collapsed }) {
  return (
    <div className="sidebar-bottom">
      <button className="nav-item" title={collapsed ? "More" : undefined}>
        <span className="nav-item__icon">
          <HiOutlineMenuAlt2 />
        </span>
        {!collapsed && <span className="nav-item__label">More</span>}
      </button>
    </div>
  );
}
