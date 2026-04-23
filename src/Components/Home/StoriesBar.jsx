import { useRef, useState, useEffect } from "react";
import "./StoriesBar.css";

const storiesData = [
  { id: 1, username: "suhanyyy", avatar: "https://i.pravatar.cc/150?img=1", storyImg: "https://picsum.photos/400/700?random=1" },
  { id: 2, username: "yuvraj_raj", avatar: "https://i.pravatar.cc/150?img=2", storyImg: "https://picsum.photos/400/700?random=2" },
  { id: 3, username: "parthmoh", avatar: "https://i.pravatar.cc/150?img=3", storyImg: "https://picsum.photos/400/700?random=3" },
  { id: 4, username: "_yash459", avatar: "https://i.pravatar.cc/150?img=4", storyImg: "https://picsum.photos/400/700?random=4" },
  { id: 5, username: "divyxnsh", avatar: "https://i.pravatar.cc/150?img=5", storyImg: "https://picsum.photos/400/700?random=5" },
  { id: 6, username: "yashh_ch", avatar: "https://i.pravatar.cc/150?img=6", storyImg: "https://picsum.photos/400/700?random=6" },
];

export default function StoriesBar() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [activeStory, setActiveStory] = useState(null);

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
    scrollRef.current.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };

  return (
    <div className="stories-wrapper">
      {/* Smart Sliding Left Arrow */}
      <button 
        className={`scroll-btn left ${showLeft ? "is-visible" : ""}`} 
        onClick={() => scroll("left")}
      >
        &#8249;
      </button>
      
      <div className="stories-bar" ref={scrollRef}>
        {/* Your Story Item */}
        <div className="story-item your-story">
          <div className="story-avatar-wrapper">
            <img src="https://i.pravatar.cc/150?img=12" alt="Your Story" className="story-avatar" />
            <div className="plus-icon">+</div>
          </div>
          <span className="story-username">Your Story</span>
        </div>

        {/* Other Stories */}
        {storiesData.map((story) => (
          <div className="story-item" key={story.id} onClick={() => setActiveStory(story)}>
            <div className="story-ring">
              <img src={story.avatar} alt={story.username} className="story-avatar" />
            </div>
            <span className="story-username">{story.username}</span>
          </div>
        ))}
      </div>

      {/* Smart Sliding Right Arrow */}
      <button 
        className={`scroll-btn right ${showRight ? "is-visible" : ""}`} 
        onClick={() => scroll("right")}
      >
        &#8250;
      </button>

      {/* --- STORY VIEWER MODAL --- */}
      {activeStory && (
        <div className="story-viewer-overlay" onClick={() => setActiveStory(null)}>
          <button className="viewer-nav-btn prev" onClick={(e) => e.stopPropagation()}>&#8249;</button>

          <div className="story-viewer-content" onClick={(e) => e.stopPropagation()}>
            <div className="viewer-progress-container">
              <div className="progress-segment"><div className="progress-fill" style={{width: '100%'}}></div></div>
              <div className="progress-segment"><div className="progress-fill" style={{width: '30%'}}></div></div>
            </div>

            <div className="viewer-header">
              <div className="viewer-header-left">
                <img src={activeStory.avatar} className="mini-avatar" alt="" />
                <span className="viewer-user">{activeStory.username}</span>
                <span className="viewer-time">12h</span>
              </div>
              <div className="viewer-header-right">
                <button className="ctrl-btn">Mute</button>
                <button className="ctrl-btn">Play</button>
                <button className="ctrl-btn">•••</button>
              </div>
            </div>

            <img src={activeStory.storyImg} className="viewer-main-img" alt="" />

            <div className="viewer-footer">
              <button className="share-icon-btn">↗</button>
            </div>
          </div>

          <button className="viewer-nav-btn next" onClick={(e) => e.stopPropagation()}>&#8250;</button>
          <button className="viewer-close" onClick={() => setActiveStory(null)}>&times;</button>
        </div>
      )}
    </div>
  );
}