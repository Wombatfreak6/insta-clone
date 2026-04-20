
import "./Sidebar.css";

export default function NavItem({ icon: Icon, label, active, collapsed, onClick }) {
  return (
    <button
      className={`nav-item ${active ? "nav-item--active" : ""}`}
      onClick={onClick}
      title={collapsed ? label : undefined}
    >
      <span className="nav-item__icon">
        <Icon />
      </span>
      {!collapsed && <span className="nav-item__label">{label}</span>}
    </button>
  );
}
