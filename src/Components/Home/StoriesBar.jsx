import { useRef, useState, useEffect } from "react";
import "./StoriesBar.css";

const storiesData = [
  { id: 1, username: "suhanyyy", avatar: "https://i.pravatar.cc/150?img=1", seen: false },
  { id: 2, username: "yuvraj_raj", avatar: "https://i.pravatar.cc/150?img=2", seen: false },
  { id: 3, username: "parthmoh", avatar: "https://i.pravatar.cc/150?img=3", seen: false },
  { id: 4, username: "_yash459", avatar: "https://i.pravatar.cc/150?img=4", seen: false },
  { id: 5, username: "divyxnsh", avatar: "https://i.pravatar.cc/150?img=5", seen: true },
  { id: 6, username: "yashh_ch", avatar: "https://i.pravatar.cc/150?img=6", seen: true },
  { id: 7, username: "rahul.99", avatar: "https://i.pravatar.cc/150?img=7", seen: false },
  { id: 8, username: "priya_k", avatar: "https://i.pravatar.cc/150?img=8", seen: false },
];

export default function StoriesBar() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const bar = scrollRef.current;
    if (bar) {
      checkScroll();
      bar.addEventListener("scroll", checkScroll);
      return () => bar.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ 
      left: dir === "left" ? -240 : 240, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="stories-wrapper">
      {/* Buttons stay in DOM, CSS handles the 'Peeking' animation */}
      <button 
        className={`scroll-btn left ${showLeft ? "is-visible" : ""}`} 
        onClick={() => scroll("left")}
      >
        &#8249;
      </button>
      
      <div className="stories-bar" ref={scrollRef}>
        <div className="story-item your-story">
          <div className="story-avatar-wrapper">
            <img src="https://i.pravatar.cc/150?img=12" alt="Your Story" className="story-avatar" />
            <div className="plus-icon">+</div>
          </div>
          <span className="story-username">Your Story</span>
        </div>

        {storiesData.map((story) => (
          <div className="story-item" key={story.id}>
            <div className={`story-ring ${story.seen ? "seen" : ""}`}>
              <img src={story.avatar} alt={story.username} className="story-avatar" />
            </div>
            <span className="story-username">{story.username}</span>
          </div>
        ))}
      </div>

      <button 
        className={`scroll-btn right ${showRight ? "is-visible" : ""}`} 
        onClick={() => scroll("right")}
      >
        &#8250;
      </button>
    </div>
  );
}