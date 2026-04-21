import { MdVerified } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import './SearchPage.css';

export default function SearchItem({ user, onRemove }) {
  return (
    <div className="search-item">
      <img src={user.avatar} alt={user.username} className="search-item-avatar" />
      <div className="search-item-info">
        <div className="search-item-header">
          <span className="search-item-username">{user.username}</span>
          {user.verified && <MdVerified className="search-item-verified" />}
        </div>
        <span className="search-item-subtitle">{user.fullName} • {user.followers}</span>
      </div>
      <button className="search-item-remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(user.id);
      }}>
        <IoCloseOutline />
      </button>
    </div>
  );
}
