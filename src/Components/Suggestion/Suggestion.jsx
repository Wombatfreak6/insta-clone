import "./Suggestion.css";

const suggestions = [
  {
    id: 1,
    username: "alex.anyways18",
    subtitle: "Suggested for you",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    id: 2,
    username: "chantouflowergirl",
    subtitle: "Follows you",
    avatar: "https://i.pravatar.cc/150?u=chantou",
  },
  {
    id: 3,
    username: "gwangurl77",
    subtitle: "Followed by chantouflowergirl",
    avatar: "https://i.pravatar.cc/150?u=gwangurl77",
  },
  {
    id: 4,
    username: "mishka_songs",
    subtitle: "Follows you",
    avatar: "https://i.pravatar.cc/150?u=mishka",
  },
  {
    id: 5,
    username: "pierre_thecomet",
    subtitle: "Followed by mishka_songs + 6 more",
    avatar: "https://i.pravatar.cc/150?u=pierre",
  },
];

export default function Suggestion() {
  const user = JSON.parse(localStorage.getItem("Account") || "{}");
  const username = user.username || "user";
  const displayName = user.name || "User";

  return (
    <div className="suggestion-container">
      {/* Current User Profile Section */}
      <div className="current-user">
        <div className="user-info-main">
          <img 
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d" 
            alt="User Avatar" 
            className="user-avatar-large" 
          />
          <div className="user-text">
            <span className="username-main">{username}</span>
            <span className="fullname-main">{displayName}</span>
          </div>
        </div>
        <button className="switch-btn">Switch</button>
      </div>

      {/* Suggestions Header */}
      <div className="suggestions-header">
        <span className="header-title">Suggestions For You</span>
        <button className="see-all-btn">See All</button>
      </div>

      {/* Suggestions List */}
      <div className="suggestions-list">
        {suggestions.map((user) => (
          <div key={user.id} className="suggestion-item">
            <div className="suggestion-user-info">
              <img 
                src={user.avatar} 
                alt={user.username} 
                className="suggestion-avatar" 
              />
              <div className="suggestion-text">
                <span className="suggestion-username">{user.username}</span>
                <span className="suggestion-subtitle">{user.subtitle}</span>
              </div>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="suggestion-footer">
        <nav className="footer-links">
          <span>About</span><span>•</span>
          <span>Help</span><span>•</span>
          <span>Press</span><span>•</span>
          <span>API</span><span>•</span>
          <span>Jobs</span><span>•</span>
          <span>Privacy</span><span>•</span>
          <span>Terms</span><span>•</span>
          <span>Locations</span><span>•</span>
          <span>Language</span><span>•</span>
          <span>Meta Verified</span>
        </nav>
        <div className="footer-copyright">
          © 2026 INSTAGRAM FROM META
        </div>
      </div>
    </div>
  );
}
