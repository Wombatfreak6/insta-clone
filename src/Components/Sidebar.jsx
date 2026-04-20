// Sidebar.jsx
// Main sidebar component for the Instagram UI clone.
// Composes Logo, a list of NavItems, and BottomMenu.
// Collapses to icon-only on medium screens via CSS; hidden on mobile.

import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlinePlaySquare,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";

import Logo from "./Logo";
import NavItem from "./NavItem";
import BottomMenu from "./BottomMenu";
import "./Sidebar.css";

// Define the main navigation links in one place so they're easy to extend.
const NAV_LINKS = [
  { id: "home",          label: "Home",          icon: AiOutlineHome },
  { id: "search",        label: "Search",        icon: AiOutlineSearch },
  { id: "explore",       label: "Explore",       icon: AiOutlineCompass },
  { id: "reels",         label: "Reels",         icon: AiOutlinePlaySquare },
  { id: "messages",      label: "Messages",      icon: AiOutlineMessage },
  { id: "notifications", label: "Notifications", icon: AiOutlineHeart },
  { id: "create",        label: "Create",        icon: AiOutlinePlusSquare },
  { id: "profile",       label: "Profile",       icon: RiAccountCircleLine },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <aside className="sidebar">
      {/* Logo at top */}
      <Logo />

      {/* Main nav links */}
      <nav className="sidebar-nav">
        {NAV_LINKS.map(({ id, label, icon }) => (
          <NavItem
            key={id}
            icon={icon}
            label={label}
            active={activeItem === id}
            onClick={() => setActiveItem(id)}
          />
        ))}
      </nav>

      {/* More button pinned to bottom */}
      <BottomMenu />
    </aside>
  );
}
