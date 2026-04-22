import "./Sidebar.css";

export default function NavItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      className={`nav-item ${active ? "nav-item--active" : ""}`}
      onClick={onClick}
    >
      <span className="nav-item__icon">
        <Icon />
      </span>
      <span className="nav-item__label">{label}</span>
    </button>
  );
}
