import React from 'react';
import { Search, Heart, MessageCircle } from 'lucide-react';
import './ExplorePage.css';

const exploreData = [
  { id: 1, img: "https://picsum.photos/400/400?random=101", likes: "1.2k", comments: "45" },
  { id: 2, img: "https://picsum.photos/400/400?random=102", likes: "850", comments: "12" },
  { id: 3, img: "https://picsum.photos/400/800?random=103", likes: "15k", comments: "230", isWide: true }, // Badi vertical photo
  { id: 4, img: "https://picsum.photos/400/400?random=104", likes: "2.4k", comments: "56" },
  { id: 5, img: "https://picsum.photos/400/400?random=105", likes: "10k", comments: "110" },
  { id: 6, img: "https://picsum.photos/400/400?random=106", likes: "5k", comments: "88" },
  { id: 7, img: "https://picsum.photos/400/800?random=107", likes: "40k", comments: "1.5k", isWide: true }, // Badi vertical photo
  { id: 8, img: "https://picsum.photos/400/400?random=108", likes: "12k", comments: "200" },
  { id: 9, img: "https://picsum.photos/400/400?random=109", likes: "7k", comments: "95" },
];

const ExplorePage = () => {
  return (
    <div className="explore-container">
      {/* Search Header */}
      <div className="explore-search-wrapper">
        <div className="explore-search-bar">
          <Search size={16} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* Explore Grid */}
      <div className="explore-grid">
        {exploreData.map((item) => (
          <div key={item.id} className={`explore-item ${item.isWide ? 'wide' : ''}`}>
            <img src={item.img} alt="explore-post" />
            
            {/* Hover Overlay */}
            <div className="explore-overlay">
              <div className="overlay-content">
                <span><Heart fill="white" size={20} /> {item.likes}</span>
                <span><MessageCircle fill="white" size={20} /> {item.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage; // Sabse zaroori line!