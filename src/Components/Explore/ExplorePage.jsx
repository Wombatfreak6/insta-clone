import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import './ExplorePage.css';

const exploreData = [
  { id: 1, img: "https://picsum.photos/400/400?random=101", likes: "1.2k", comments: "45", isVideo: true },
  { id: 2, img: "https://picsum.photos/400/400?random=102", likes: "850", comments: "12", isCarousel: true },
  { id: 3, img: "https://picsum.photos/400/800?random=103", likes: "15k", comments: "230", isTall: true },
  { id: 4, img: "https://picsum.photos/400/400?random=104", likes: "2.4k", comments: "56" },
  { id: 5, img: "https://picsum.photos/400/400?random=105", likes: "10k", comments: "110", isVideo: true },
  { id: 6, img: "https://picsum.photos/400/400?random=106", likes: "5k", comments: "88" },
  { id: 7, img: "https://picsum.photos/400/800?random=107", likes: "40k", comments: "1.5k", isTall: true },
  { id: 8, img: "https://picsum.photos/400/400?random=108", likes: "12k", comments: "200", isCarousel: true },
  { id: 9, img: "https://picsum.photos/400/400?random=109", likes: "7k", comments: "95", isVideo: true },
];

const ExplorePage = ({ onNavigate }) => {
  return (
    <div className="explore-container">
      <div className="explore-grid">
        {exploreData.map((item) => (
          <div key={item.id} className={`explore-item ${item.isTall ? 'tall' : ''}`}>
            <img src={item.img} alt="explore-post" className="explore-img" />
            
            {/* Post Icons (Video/Carousel) */}
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
        ))}
      </div>


      <div className="floating-dm-bar" onClick={() => onNavigate("messages")}>
        <div className="dm-bar-left">
          <div className="stacked-profiles">
            <img src="https://i.pravatar.cc/100?img=11" alt="u1" className="stack-img" />
            <img src="https://i.pravatar.cc/100?img=12" alt="u2" className="stack-img" />
            <img src="https://i.pravatar.cc/100?img=13" alt="u3" className="stack-img" />
          </div>
          <span className="dm-text">Messages</span>
        </div>
        <div className="dm-bar-right">
          <MessageCircle size={20} color="white" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;