import "./ProfileStats.css";

function formatCount(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

export default function ProfileStats({ posts, followers, following }) {
  const stats = [
    { label: "posts", value: posts },
    { label: "followers", value: followers },
    { label: "following", value: following },
  ];

  return (
    <ul className="profile-stats">
      {stats.map(({ label, value }) => (
        <li key={label} className="profile-stats__item">
          <span className="profile-stats__count">{formatCount(value)}</span>
          <span className="profile-stats__label">{label}</span>
        </li>
      ))}
    </ul>
  );
}
