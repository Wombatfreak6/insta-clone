import {
  GoHome,
  GoHomeFill
} from "react-icons/go";
import {
  IoSearchOutline,
  IoSearch,
  IoCompassOutline,
  IoCompass,
  IoHeartOutline,
  IoHeart
} from "react-icons/io5";
import {
  RiVideoLine,
  RiVideoFill,
  RiMessengerLine,
  RiMessengerFill,
  RiAccountCircleLine,
  RiAccountCircleFill
} from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import Logo from "./Logo";
import NavItem from "./NavItem";
import BottomMenu from "./BottomMenu";
import "./Sidebar.css";

const NAV_LINKS = [
  { id: "home",          label: "Home",          icon: GoHome,          activeIcon: GoHomeFill },
  { id: "search",        label: "Search",        icon: IoSearchOutline, activeIcon: IoSearch },
  { id: "explore",       label: "Explore",       icon: IoCompassOutline, activeIcon: IoCompass },
  { id: "reels",         label: "Reels",         icon: RiVideoLine,     activeIcon: RiVideoFill },
  { id: "messages",      label: "Messages",      icon: RiMessengerLine, activeIcon: RiMessengerFill, badge: 3 },
  { id: "notifications", label: "Notifications", icon: IoHeartOutline,  activeIcon: IoHeart },
  { id: "create",        label: "Create",        icon: FiPlusSquare,    activeIcon: FiPlusSquare },
  { id: "profile",       label: "Profile",       icon: "https://i.pravatar.cc/150?u=a042581f4e29026704d", activeIcon: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
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
        {NAV_LINKS.map(({ id, label, icon, activeIcon, badge }) => (
          <NavItem
            key={id}
            icon={currentActive === id ? activeIcon : icon}
            label={label}
            active={currentActive === id}
            badge={badge}
            onClick={() => handleClick(id)}
          />
        ))}
      </nav>
      <BottomMenu />
    </aside>
  );
}
