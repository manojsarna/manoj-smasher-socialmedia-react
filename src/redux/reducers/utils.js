const sortByDate = (initialPosts, oldestFirst = false) => {
  const posts = [...initialPosts];

  if (oldestFirst)
    return posts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

const sortByTrending = (initialPosts) => {
  const posts = [...initialPosts];
  return posts.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
};

export { sortByDate, sortByTrending };
