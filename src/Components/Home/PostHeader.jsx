import { BsThreeDots } from "react-icons/bs";

export default function PostHeader({ avatar, username, time, verified }) {
  return (
    <div className="post-header">
      <div className="post-header-left">
        <img src={avatar} alt={username} className="post-avatar" />
        <div className="post-header-info">
          <div className="post-username-wrapper" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
            <span className="post-username">{username}</span>
            {verified && (
              <svg className="verified-icon" viewBox="0 0 40 40" fill="none" style={{width: '12px', height: '12px'}}>
                <circle cx="20" cy="20" r="20" fill="#3797F0" />
                <path d="M12 20l6 6 10-12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            <span style={{color: '#a8a8a8', fontSize: '14px', margin: '0 4px'}}>•</span>
            <span className="post-time">{time}</span>
          </div>
        </div>
      </div>
      <button className="post-menu-btn" aria-label="More options">
        <BsThreeDots />
      </button>
    </div>
  );
}
