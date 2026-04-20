// NavItem.jsx
// A single navigation item row inside the sidebar.
// Shows an icon, and optionally a label (hidden when sidebar is collapsed).
// Applies an "active" highlight when the current route matches.

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
