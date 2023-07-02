import { POSTS } from '../../app/shared/POSTS';

export const selectAllPosts = () => {
  return POSTS;
};

export const selectRandomPost = () => {
  return POSTS[Math.floor(POSTS.length * Math.random())];
};

