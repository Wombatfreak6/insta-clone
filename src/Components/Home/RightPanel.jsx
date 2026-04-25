import React, { useState } from "react";
import "./RightPanel.css";

const suggestedUsers = [
  { id: 1, username: "rahul_travels", subtext: "Followed by yuvraj_raj", avatar: "https://i.pravatar.cc/150?img=21" },
  { id: 2, username: "priya.clicks", subtext: "Followed by parthmoh", avatar: "https://i.pravatar.cc/150?img=22" },
  { id: 3, username: "dev.404", subtext: "Followed by _yash459", avatar: "https://i.pravatar.cc/150?img=23" },
  { id: 4, username: "sana_vibes", subtext: "Followed by divyxnsh", avatar: "https://i.pravatar.cc/150?img=24" },
  { id: 5, username: "xplore.with.aryan", subtext: "Suggested for you", avatar: "https://i.pravatar.cc/150?img=25" },
];

export default function RightPanel() {
  const [followed, setFollowed] = useState({});

  const toggleFollow = (id) => {
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const account = JSON.parse(localStorage.getItem("Account") || "{}");
  const username = account.username || "jatinnagwaniii";
  const fullName = account.name || "Jatin Nagwani";

  return (
    <div className="right-panel">
      <div className="rp-user-row">
        <div className="rp-user-left">
          <img src="https://i.pravatar.cc/150?img=20" alt="profile" className="rp-user-avatar" />
          <div className="rp-user-info">
            <span className="rp-username">{username}</span>
            <span className="rp-fullname">{fullName}</span>
          </div>
        </div>
        <button className="rp-switch-btn">Switch</button>
      </div>

      <div className="rp-header-row">
        <span className="rp-title">Suggested for you</span>
        <button className="rp-see-all">See All</button>
      </div>

      <div className="rp-list">
        {suggestedUsers.map((user) => (
          <div className="rp-item" key={user.id}>
            <div className="rp-item-left">
              <img src={user.avatar} alt={user.username} className="rp-avatar" />
              <div className="rp-item-info">
                <span className="rp-item-username">{user.username}</span>
                <span className="rp-item-subtext">{user.subtext}</span>
              </div>
            </div>
            <button
              className={`rp-follow-btn ${followed[user.id] ? "following" : ""}`}
              onClick={() => toggleFollow(user.id)}
            >
              {followed[user.id] ? "Following" : "Follow"}
            </button>
          </div>
        ))}
      </div>

      <div className="rp-footer">
        <div className="rp-footer-links">
          <span>About</span> • <span>Help</span> • <span>Press</span> • <span>API</span> • <span>Jobs</span> • <span>Privacy</span> • <span>Terms</span> • <span>Locations</span> • <span>Language</span> • <span>Meta Verified</span>
        </div>
        <div className="rp-footer-copyright">
          © 2026 INSTAGRAM FROM META
        </div>
      </div>
    </div>
  );
}
