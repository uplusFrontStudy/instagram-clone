import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowPosts } from '../../modules/posts';
import Dashboard from '../../components/dashboard/Dashboard';

const DashboardContainer = () => {
  const { posts, error, loading, loginUser } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/GET_FOLLOW_POSTS'],
      loginUser: user.user,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowPosts(loginUser[0].following));
  }, [dispatch, loginUser]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div> 에러발생</div>;
  if (!posts) return null;

  return <Dashboard followPosts={posts} />;
};

export default DashboardContainer;
