import { BsGrid3X3, BsBookmark, BsPersonBoundingBox, BsCameraVideo } from "react-icons/bs";
import "./ProfileTabs.css";

const TABS = [
  { id: "posts",  label: "Posts",  Icon: BsGrid3X3 },
  { id: "reels",  label: "Reels",  Icon: BsCameraVideo },
  { id: "saved",  label: "Saved",  Icon: BsBookmark },
  { id: "tagged", label: "Tagged", Icon: BsPersonBoundingBox },
];

export default function ProfileTabs({ activeTab, onTabChange }) {
  return (
    <nav className="profile-tabs" aria-label="Profile content tabs">
      {TABS.map(({ id, label, Icon }) => (
        <button
          key={id}
          id={`tab-${id}`}
          className={`profile-tabs__tab ${activeTab === id ? "profile-tabs__tab--active" : ""}`}
          onClick={() => onTabChange(id)}
          aria-selected={activeTab === id}
          role="tab"
        >
          <Icon className="profile-tabs__icon" />
          <span className="profile-tabs__label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
