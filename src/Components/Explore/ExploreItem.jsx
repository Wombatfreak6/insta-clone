import React, { forwardRef } from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const ExploreItem = forwardRef(({ item }, ref) => {
  return (
    <div ref={ref} className={`explore-item ${item.isTall ? 'tall' : ''}`}>
      <img src={item.img} alt="explore-post" className="explore-img" loading="lazy" />
      {(item.isVideo || item.isCarousel) && (
        <div className="post-type-icon">
          {item.isVideo ? (
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 00-3.5-6.62L6.66 5.5A3.74 3.74 0 004.5 9.62v4.91a3.74 3.74 0 003.74 3.74h6.52a3.74 3.74 0 003.5-2.44l1.51-.63a1.88 1.88 0 000-3.44zM16.26 14a1.74 1.74 0 01-1.5.88H8.24a1.74 1.74 0 01-1.74-1.74V9.62a1.74 1.74 0 011-1.58l7.84-3.06a1.74 1.74 0 012.16 1.65v6.14z"/></svg>
          ) : (
            <svg viewBox="0 0 48 48" fill="white" width="18" height="18"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM27.2 29.6v-7.2l5.2 3.6-5.2 3.6zM42 12.7v21.6"/></svg>
          )}
        </div>
      )}
      <div className="explore-overlay">
        <div className="overlay-content">
          <span><Heart fill="white" size={20} /> {item.likes}</span>
          <span><MessageCircle fill="white" size={20} /> {item.comments}</span>
        </div>
      </div>
    </div>
  );
});

export default ExploreItem;
