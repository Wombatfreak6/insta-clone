import Feed from "./Feed";
import StoriesBar from "./StoriesBar";
import Suggestion from "../Suggestion/Suggestion";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-center">
        <StoriesBar />
        <Feed />
      </div>
      <div className="home-right">
        <Suggestion />
      </div>
    </div>
  );
}
