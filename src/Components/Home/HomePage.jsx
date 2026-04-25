import Feed from "./Feed";
import StoriesBar from "./StoriesBar";
import RightPanel from "./RightPanel";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-center">
          <StoriesBar />
          <Feed />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}