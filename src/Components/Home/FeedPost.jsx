import PostHeader from "./PostHeader";
import PostActions from "./PostActions";

export default function FeedPost({ post }) {
  const { username, avatar, image, likes, caption, time } = post;

  return (
    <article className="feed-post">
      <PostHeader avatar={avatar} username={username} time={time} />

      <div className="post-image-wrap">
        <img src={image} alt={`${username}'s post`} className="post-image" />
      </div>

      <PostActions likes={likes} />

      <div className="post-caption">
        <span className="post-caption-user">{username}</span>
        <span className="post-caption-text">{caption}</span>
      </div>

      <button className="post-view-comments">View all comments</button>
    </article>
  );
}
