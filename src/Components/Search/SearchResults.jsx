import SearchItem from './SearchItem';
import './SearchPage.css';

export default function SearchResults({ results, onRemove, title, onClearAll, isRecent }) {
  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <h4>{title}</h4>
        {isRecent && results.length > 0 && (
          <button className="search-clear-all" onClick={onClearAll}>Clear all</button>
        )}
      </div>
      <div className="search-results-list">
        {results.length > 0 ? (
          results.map(user => (
            <SearchItem key={user.id} user={user} onRemove={onRemove} />
          ))
        ) : (
          <div className="search-no-results">No results found.</div>
        )}
      </div>
    </div>
  );
}
