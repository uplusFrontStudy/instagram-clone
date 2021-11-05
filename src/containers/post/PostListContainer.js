import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../../components/post/PostList';
import { readPost } from '../../modules/post';
import { listPosts } from '../../modules/posts';

const PostListContainer = ({ userId }) => {
  const { posts, error, loading, loginUser } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      loginUser: user.user,
    }),
  );
  const dispatch = useDispatch();

  const getPost = (docId) => {
    dispatch(readPost(docId));
  };

  useEffect(() => {
    dispatch(listPosts(userId));
  }, [dispatch, userId]);

  return (
    <>
      <PostList
        posts={posts}
        loading={loading}
        error={error}
        currentUser={userId}
        loginUser={loginUser}
        getPost={getPost}
      />
    </>
  );
};

export default PostListContainer;
