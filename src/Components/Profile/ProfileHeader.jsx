import { RiSettings3Line } from "react-icons/ri";
import ProfileStats from "./ProfileStats";
import "./ProfileHeader.css";

export default function ProfileHeader({ profile }) {
  const { username, displayName, bio, postsCount, followersCount, followingCount } = profile;

  return (
    <header className="profile-header">
      <div className="profile-header__avatar-wrap">
        <div className="profile-header__avatar profile-header__avatar--fallback">
          {displayName.charAt(0).toUpperCase()}
        </div>
      </div>

      <div className="profile-header__info">
        <div className="profile-header__username-row">
          <span className="profile-header__username">{username}</span>
          <button className="profile-header__settings-btn" aria-label="Settings">
            <RiSettings3Line />
          </button>
        </div>

        <div className="profile-header__stats-desktop">
          <ProfileStats posts={postsCount} followers={followersCount} following={followingCount} />
        </div>

        <p className="profile-header__display-name">{displayName}</p>

        {bio.length > 0 && (
          <div className="profile-header__bio">
            {bio.map((line, i) => (
              <p key={i} className="profile-header__bio-line">{line}</p>
            ))}
          </div>
        )}
      </div>

      <div className="profile-header__stats-mobile">
        <ProfileStats posts={postsCount} followers={followersCount} following={followingCount} />
      </div>
    </header>
  );
}
