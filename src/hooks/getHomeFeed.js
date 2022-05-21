export const getHomeFeed = (posts, user) => {
  if (posts.length === 0) return posts;
  return posts.filter((post) => user.following.username === post.username);
};
// let tempPosts = posts.filter((item) =>
// user.following.find((tempUser) => tempUser.username === item.username)
// ).concat();
