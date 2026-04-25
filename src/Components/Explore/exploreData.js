export const generatePosts = (count, startIndex = 0) => {
  const posts = [];
  for (let i = 0; i < count; i++) {
    const id = startIndex + i + 1;
    const isTall = id % 7 === 0;
    const isVideo = id % 5 === 0;
    const isCarousel = id % 8 === 0 && !isVideo;
    
    posts.push({
      id,
      img: `https://picsum.photos/500/${isTall ? '1000' : '500'}?random=${id}`,
      likes: (Math.floor(Math.random() * 100) + 1) + "k",
      comments: Math.floor(Math.random() * 900) + 10,
      isTall,
      isVideo,
      isCarousel
    });
  }
  return posts;
};
