import { AiOutlinePlus } from "react-icons/ai";
import "./HighlightItem.css";

export default function HighlightItem({ label, imageUrl, isNew }) {
  return (
    <div className="highlight-item">
      <div className={`highlight-item__circle ${isNew ? "highlight-item__circle--new" : ""}`}>
        {isNew ? (
          <AiOutlinePlus className="highlight-item__plus-icon" />
        ) : imageUrl ? (
          <img src={imageUrl} alt={label} className="highlight-item__img" />
        ) : (
          <div className="highlight-item__placeholder">
            {label.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <span className="highlight-item__label">{label}</span>
    </div>
  );
}
