import PostHeader from "./PostHeader";
import PostActions from "./PostActions";

export default function FeedPost({ post }) {
  const { username, avatar, image, likes, caption, time, verified } = post;

  return (
    <article className="feed-post">
      <PostHeader avatar={avatar} username={username} time={time} verified={verified} />

      <div className="post-image-wrap">
        <img src={image} alt={`${username}'s post`} className="post-image" />
      </div>

      <PostActions likes={likes} />

      <div className="post-caption">
        <span className="post-caption-user">{username}</span>
        <span className="post-caption-text">{caption}</span>
      </div>

      <button className="post-view-comments">View all comments</button>
      
      <div className="post-add-comment" style={{display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px', borderBottom: 'none'}}>
        <input type="text" placeholder="Add a comment..." style={{flex: 1, background: 'none', border: 'none', color: '#f5f5f5', outline: 'none', fontSize: '14px'}} />
        <button style={{background: 'none', border: 'none', color: '#0095f6', fontSize: '14px', fontWeight: 600, cursor: 'pointer'}}>Post</button>
      </div>
    </article>
  );
}
