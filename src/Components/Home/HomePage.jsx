import Feed from "./Feed";
import StoriesBar from "./StoriesBar";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-center">
        <StoriesBar />
        <Feed />
      </div>
    </div>
  );
}
