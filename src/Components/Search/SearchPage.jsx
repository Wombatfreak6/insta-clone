import { useState, useEffect, useMemo } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { generateRandomProfiles } from "./searchData";
import { IoCloseOutline } from "react-icons/io5";
import "./SearchPage.css";

export default function SearchPage({ onClose, isOpen }) {
  const [query, setQuery] = useState("");
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    setRecentUsers(generateRandomProfiles());
  }, []);

  const filteredUsers = useMemo(() => {
    if (!query.trim()) return recentUsers;
    const lowerQuery = query.toLowerCase();
    return recentUsers.filter(
      (user) =>
        user.username.toLowerCase().includes(lowerQuery) ||
        user.fullName.toLowerCase().includes(lowerQuery)
    );
  }, [query, recentUsers]);

  const handleRemove = (id) => {
    setRecentUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleClearAll = () => {
    setRecentUsers([]);
  };

  return (
    <div className={`search-panel ${isOpen ? "open" : ""}`}>
      <div className="search-panel-header">
        <h2>Search</h2>
        <button className="search-panel-close-mobile" onClick={onClose}>
          <IoCloseOutline />
        </button>
      </div>

      <SearchBar query={query} setQuery={setQuery} />

      <hr className="search-panel-divider" />

      <SearchResults 
        results={filteredUsers}
        onRemove={handleRemove}
        title={query ? "Results" : "Recent"}
        isRecent={!query}
        onClearAll={handleClearAll}
      />
    </div>
  );
}