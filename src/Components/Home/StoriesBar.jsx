import { useRef, useState, useEffect } from "react";
import { Volume2, Play, MoreHorizontal, Send, ChevronLeft, ChevronRight, X } from "lucide-react";
import "./StoriesBar.css";

const storiesData = [
  { id: 1, username: "suhanyyy", avatar: "https://i.pravatar.cc/150?img=1", storyImg: "https://picsum.photos/400/700?random=1" },
  { id: 2, username: "yuvraj_raj", avatar: "https://i.pravatar.cc/150?img=2", storyImg: "https://picsum.photos/400/700?random=2" },
  { id: 3, username: "parthmoh", avatar: "https://i.pravatar.cc/150?img=3", storyImg: "https://picsum.photos/400/700?random=3" },
  { id: 4, username: "_yash459", avatar: "https://i.pravatar.cc/150?img=4", storyImg: "https://picsum.photos/400/700?random=4" },
  { id: 5, username: "divyxnsh", avatar: "https://i.pravatar.cc/150?img=5", storyImg: "https://picsum.photos/400/700?random=5" },
  { id: 6, username: "yashh_ch", avatar: "https://i.pravatar.cc/150?img=6", storyImg: "https://picsum.photos/400/700?random=6" },
  { id: 7, username: "rahul.99", avatar: "https://i.pravatar.cc/150?img=7", storyImg: "https://picsum.photos/400/700?random=7" },
];

export default function StoriesBar() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [activeIdx, setActiveIdx] = useState(null); 
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (activeIdx !== null) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 50); 
    }
    return () => clearInterval(interval);
  }, [activeIdx]);

  const handleNext = () => {
    if (activeIdx < storiesData.length - 1) {
      setActiveIdx(activeIdx + 1);
    } else {
      setActiveIdx(null);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) setActiveIdx(activeIdx - 1);
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  return (
    <div className="stories-wrapper">
      <button className={`scroll-btn left ${showLeft ? "is-visible" : ""}`} onClick={() => scrollRef.current.scrollBy({left: -240, behavior: "smooth"})}>
        <ChevronLeft size={20}/>
      </button>
      
      <div className="stories-bar" ref={scrollRef} onScroll={checkScroll}>
        <div className="story-item your-story">
          <div className="story-avatar-wrapper">
            <img src="https://i.pravatar.cc/150?img=12" className="story-avatar" />
            <div className="plus-icon">+</div>
          </div>
          <span className="story-username">Your Story</span>
        </div>

        {storiesData.map((story, index) => (
          <div className="story-item" key={story.id} onClick={() => setActiveIdx(index)}>
            <div className="story-ring"><img src={story.avatar} className="story-avatar" /></div>
            <span className="story-username">{story.username}</span>
          </div>
        ))}
      </div>

      <button className={`scroll-btn right ${showRight ? "is-visible" : ""}`} onClick={() => scrollRef.current.scrollBy({left: 240, behavior: "smooth"})}>
        <ChevronRight size={20}/>
      </button>

      {activeIdx !== null && (
        <div className="story-viewer-overlay" onClick={() => setActiveIdx(null)}>
          <button className="viewer-nav-btn" onClick={(e) => {e.stopPropagation(); handlePrev();}}><ChevronLeft /></button>

          {/* KEY={ACTIVEIDX} is the trick here for the animation to repeat */}
          <div className="story-viewer-content" key={activeIdx} onClick={(e) => e.stopPropagation()}>
            <div className="viewer-progress-container">
              {storiesData.map((_, i) => (
                <div key={i} className="progress-segment">
                  <div className="progress-fill" style={{ 
                    width: i === activeIdx ? `${progress}%` : i < activeIdx ? "100%" : "0%",
                    transition: i === activeIdx ? "none" : "width 0.3s ease"
                  }}></div>
                </div>
              ))}
            </div>

            <div className="viewer-header">
              <div className="viewer-header-left">
                <img src={storiesData[activeIdx].avatar} className="mini-avatar" />
                <span className="viewer-user">{storiesData[activeIdx].username}</span>
                <span className="viewer-time">12h</span>
              </div>
              <div className="viewer-header-right">
                <Volume2 size={18} className="ctrl-icon" />
                <Play size={18} className="ctrl-icon" />
                <MoreHorizontal size={18} className="ctrl-icon" />
              </div>
            </div>

            <img src={storiesData[activeIdx].storyImg} className="viewer-main-img" />

            <div className="viewer-footer">
              <Send size={22} className="share-icon" />
            </div>
          </div>

          <button className="viewer-nav-btn" onClick={(e) => {e.stopPropagation(); handleNext();}}><ChevronRight /></button>
          <X className="viewer-close" onClick={() => setActiveIdx(null)} />
        </div>
      )}
    </div>
  );
}
// story viewer branch active check