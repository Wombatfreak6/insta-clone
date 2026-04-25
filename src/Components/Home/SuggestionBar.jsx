import { useState } from "react";
import "./SuggestionBar.css";

const suggestedUsers = [
  { id: 1, username: "rahul_travels", subtext: "Followed by yuvraj_raj", avatar: "https://i.pravatar.cc/150?img=21" },
  { id: 2, username: "priya.clicks", subtext: "Followed by parthmoh", avatar: "https://i.pravatar.cc/150?img=22", verified: true },
  { id: 3, username: "dev.404", subtext: "Followed by _yash459", avatar: "https://i.pravatar.cc/150?img=23" },
  { id: 4, username: "sana_vibes", subtext: "Followed by divyxnsh", avatar: "https://i.pravatar.cc/150?img=24" },
  { id: 5, username: "xplore.with.aryan", subtext: "Suggested for you", avatar: "https://i.pravatar.cc/150?img=25" },
];

export default function SuggestionBar() {
  const [followed, setFollowed] = useState({});

  const toggleFollow = (id) => {
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const account = JSON.parse(localStorage.getItem("Account") || "{}");
  const username = account.username || "jatinnagwaniii";
  const fullName = account.name || "Jatin Nagwani";

  return (
    <div className="suggested-bar">
      <div className="suggested-user-row">
        <div className="suggested-user-left">
          <img src="https://i.pravatar.cc/150?img=20" alt="profile" className="suggested-user-avatar" />
          <div className="suggested-user-info">
            <span className="suggested-username">{username}</span>
            <span className="suggested-fullname">{fullName}</span>
          </div>
        </div>
        <button className="suggested-switch-btn">Switch</button>
      </div>

      <div className="suggested-header-row">
        <span className="suggested-title">Suggested for you</span>
        <button className="suggested-see-all">See all</button>
      </div>

      <div className="suggested-list">
        {suggestedUsers.map((user) => (
          <div className="suggested-item" key={user.id}>
            <div className="suggested-item-left">
              <img src={user.avatar} alt={user.username} className="suggested-avatar" />
              <div className="suggested-item-info">
                <span className="suggested-item-username">
                  {user.username}
                  {user.verified && (
                    <svg className="verified-icon" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="20" fill="#3797F0" />
                      <path d="M12 20l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="suggested-item-subtext">{user.subtext}</span>
              </div>
            </div>
            <button
              className={`suggested-follow-btn ${followed[user.id] ? "following" : ""}`}
              onClick={() => toggleFollow(user.id)}
            >
              {followed[user.id] ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}