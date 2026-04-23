import "./Sidebar.css";

export default function NavItem({ icon: Icon, label, active, onClick, badge }) {
  const isImage = typeof Icon === "string";

  return (
    <button
      className={`nav-item ${active ? "nav-item--active" : ""}`}
      onClick={onClick}
    >
      <span className="nav-item__icon">
        {isImage ? (
          <img src={Icon} alt={label} className="nav-item__avatar" />
        ) : (
          <Icon />
        )}
        {badge > 0 && <span className="nav-item__badge">{badge}</span>}
      </span>
      <span className="nav-item__label">{label}</span>
    </button>
  );
}
