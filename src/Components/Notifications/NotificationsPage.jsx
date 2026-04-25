import { notifications } from "./notificationsData";
import "./NotificationsPage.css";
import { IoCloseOutline } from "react-icons/io5";

export default function NotificationsPage({ isOpen, onClose }) {
  // Group notifications by category
  const categories = ["Today", "This Week", "Earlier"];

  return (
    <div className={`notifications-panel ${isOpen ? "open" : ""}`}>
      <div className="notifications-header">
        <h2>Notifications</h2>
        <button className="notifications-close-mobile" onClick={onClose}>
          <IoCloseOutline />
        </button>
      </div>

      <div className="notifications-content">
        {categories.map((category) => {
          const catNotifications = notifications.filter(
            (n) => n.category === category
          );
          if (catNotifications.length === 0) return null;

          return (
            <div key={category} className="notifications-section">
              <h4 className="section-title">{category}</h4>
              <div className="notifications-list">
                {catNotifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NotificationItem({ notification }) {
  const { type, user, time, postImage, text, isFollowing } = notification;

  return (
    <div className="notification-item">
      <img src={user.avatar} alt={user.username} className="user-avatar" />
      <div className="notification-text">
        <span className="username">{user.username}</span>{" "}
        {type === "like" && "liked your post."}
        {type === "follow" && (isFollowing ? "started following you." : "requested to follow you.")}
        {type === "comment" && `commented: ${text}`}
        <span className="time">{time}</span>
      </div>
      {postImage && (
        <img src={postImage} alt="Post" className="post-preview" />
      )}
      {type === "follow" && (
        <button className={`follow-btn ${isFollowing ? "following" : ""}`}>
          {isFollowing ? "Following" : "Follow"}
        </button>
      )}
    </div>
  );
}
