import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowPosts } from '../../modules/posts';
import Dashboard from '../../components/dashboard/Dashboard';

const DashboardContainer = () => {
  const { posts, error, loading, following } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/GET_FOLLOW_POSTS'],
      following: user.user[0].following,
    }),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (Array.isArray(following) && following.length !== 0) {
      dispatch(getFollowPosts(following));
    }
  }, [dispatch, following]);

  return <Dashboard followPosts={posts} loading={loading} error={error} />;
};

export default DashboardContainer;
