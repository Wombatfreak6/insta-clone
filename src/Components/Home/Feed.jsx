import FeedPost from "./FeedPost";
import posts from "./postData";

export default function Feed() {
  return (
    <section className="feed">
      {posts.map((post) => (
        <FeedPost key={post.id} post={post} />
      ))}
    </section>
  );
}
