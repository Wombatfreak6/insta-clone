import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

export default function PostActions({ likes }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  function toggleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  return (
    <div className="post-actions-section">
      <div className="post-actions-row">
        <div className="post-actions-left">
          <button
            className={`action-btn${liked ? " action-btn--liked" : ""}`}
            onClick={toggleLike}
            aria-label="Like"
          >
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <button className="action-btn" aria-label="Comment">
            <FaRegComment />
          </button>
          <button className="action-btn" aria-label="Share">
            <LuSend />
          </button>
        </div>
        <button
          className={`action-btn${saved ? " action-btn--saved" : ""}`}
          onClick={() => setSaved((prev) => !prev)}
          aria-label="Save"
        >
          {saved ? <BsBookmarkFill /> : <BsBookmark />}
        </button>
      </div>
      <p className="post-likes">{likeCount.toLocaleString()} likes</p>
    </div>
  );
}
