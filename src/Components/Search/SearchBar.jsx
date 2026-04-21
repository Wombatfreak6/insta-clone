import { IoSearchOutline, IoCloseCircle } from 'react-icons/io5';
import './SearchPage.css';

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar-container">
      <div className="search-bar-input-wrapper">
        <IoSearchOutline className="search-bar-icon" />
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <IoCloseCircle 
            className="search-bar-clear-icon" 
            onClick={() => setQuery('')} 
          />
        )}
      </div>
    </div>
  );
}
