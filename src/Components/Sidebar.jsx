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

export default function Sidebar({ activePage, onNavigate }) {
  const currentActive = activePage || "home";

  function handleClick(id) {
    if (onNavigate) onNavigate(id);
  }

  const isNarrow = currentActive === "messages";

  return (
    <aside className={`sidebar ${isNarrow ? "sidebar--narrow" : ""}`}>
      <Logo />
      <nav className="sidebar-nav">
        {NAV_LINKS.map(({ id, label, icon }) => (
          <NavItem
            key={id}
            icon={icon}
            label={label}
            active={currentActive === id}
            onClick={() => handleClick(id)}
          />
        ))}
      </nav>
      <BottomMenu />
    </aside>
  );
}
