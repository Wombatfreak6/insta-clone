import React from 'react';
import { MessageCircle } from 'lucide-react';
import ExploreGrid from './ExploreGrid';
import './ExplorePage.css';

const ExplorePage = ({ onNavigate }) => {
  return (
    <div className="explore-container">
      <ExploreGrid />

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