import { BsThreeDots } from "react-icons/bs";

export default function PostHeader({ avatar, username, time }) {
  return (
    <div className="post-header">
      <div className="post-header-left">
        <img src={avatar} alt={username} className="post-avatar" />
        <div className="post-header-info">
          <span className="post-username">{username}</span>
          <span className="post-time">{time}</span>
        </div>
      </div>
      <button className="post-menu-btn" aria-label="More options">
        <BsThreeDots />
      </button>
    </div>
  );
}
