import { useState } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileActions from "./ProfileActions";
import StoryHighlights from "./StoryHighlights";
import ProfileTabs from "./ProfileTabs";
import EmptyPosts from "./EmptyPosts";
import "./ProfilePage.css";

const TAB_EMPTY = {
  saved: {
    title: "Save",
    subtitle: "Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.",
    actionText: "Start saving",
  },
  tagged: {
    title: "Photos of you",
    subtitle: "When people tag you in photos, they'll appear here.",
    actionText: null,
  },
  reels: {
    title: "Share Reels",
    subtitle: "Reels you share will appear on your profile.",
    actionText: "Share your first reel",
  },
};

function getProfile() {
  const raw = localStorage.getItem("Account");
  if (!raw) return null;
  const { name, username } = JSON.parse(raw);
  return {
    username: username || "user",
    displayName: name || "User",
    bio: [],
    postsCount: 0,
    followersCount: 412,
    followingCount: 389,
  };
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts");
  const profile = getProfile();

  if (!profile) return null;

  return (
    <div className="profile-page">
      <div className="profile-page__inner">
        <ProfileHeader profile={profile} />
        <ProfileActions />
        <StoryHighlights />
        <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="profile-page__content">
          {activeTab === "posts" && <EmptyPosts />}
          {activeTab !== "posts" && TAB_EMPTY[activeTab] && (
            <EmptyPosts
              title={TAB_EMPTY[activeTab].title}
              subtitle={TAB_EMPTY[activeTab].subtitle}
              actionText={TAB_EMPTY[activeTab].actionText}
            />
          )}
        </div>
      </div>
    </div>
  );
}
