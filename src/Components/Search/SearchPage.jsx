import { useState } from "react";

export default function SearchPage({ onClose, isOpen }) {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    { id: 1, username: "john_doe", name: "John Doe" },
    { id: 2, username: "alex_99", name: "Alex Smith" },
    { id: 3, username: "dev_ashish", name: "Ashish" },
    { id: 4, username: "ui_master", name: "UI Designer" },
  ];

  const filtered = users.filter(
    (user) =>
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "350px",
        height: "100vh",
        background: "#000",
        borderRight: "1px solid #262626",
        zIndex: 1001,
        padding: "20px",
        color: "#fff",
        overflowY: "auto",
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <h2 style={{ margin: 0 }}>Search</h2>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          ✕
        </button>
      </div>

      {/* Input */}
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
          background: "#262626",
          color: "#fff",
          marginBottom: "20px",
          outline: "none"
        }}
      />

      {/* Section */}
      <p style={{ color: "#a8a8a8", fontSize: "14px", marginBottom: "10px" }}>
        {searchQuery ? "Results" : "Recent"}
      </p>

      {/* Users */}
      <div>
        {filtered.map((user) => (
          <div
            key={user.id}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 0",
              cursor: "pointer"
            }}
          >
            <img
              src={`https://picsum.photos/40?random=${user.id}`}
              alt=""
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "12px"
              }}
            />

            <div>
              <p style={{ fontWeight: "bold", margin: 0 }}>
                {user.username}
              </p>
              <p style={{ fontSize: "12px", color: "#a8a8a8", margin: 0 }}>
                {user.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}