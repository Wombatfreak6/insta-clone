import { BsCamera } from "react-icons/bs";
import "./EmptyPosts.css";

export default function EmptyPosts({
  title = "Share Photos",
  subtitle = "When you share photos, they will appear on your profile.",
  actionText = "Share your first photo",
}) {
  return (
    <div className="empty-posts">
      <div className="empty-posts__icon-wrap">
        <BsCamera className="empty-posts__camera-icon" />
      </div>
      <h2 className="empty-posts__title">{title}</h2>
      <p className="empty-posts__subtitle">{subtitle}</p>
      {actionText && (
        <button className="empty-posts__action" id="btn-empty-action">
          {actionText}
        </button>
      )}
    </div>
  );
}
