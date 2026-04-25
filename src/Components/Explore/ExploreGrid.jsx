import React, { useState, useEffect, useRef, useCallback } from 'react';
import ExploreItem from './ExploreItem';
import { generatePosts } from './exploreData';

const ExploreGrid = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  useEffect(() => {
    setPosts(generatePosts(12, 0));
  }, []);

  const loadMorePosts = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      setPosts((prev) => [...prev, ...generatePosts(12, prev.length)]);
      setLoading(false);
    }, 800);
  }, [loading]);

  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMorePosts();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, loadMorePosts]
  );

  return (
    <>
      <div className="explore-grid">
        {posts.map((post, index) => {
          if (posts.length === index + 1) {
            return <ExploreItem ref={lastPostRef} key={post.id} item={post} />;
          }
          return <ExploreItem key={post.id} item={post} />;
        })}
      </div>
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default ExploreGrid;
