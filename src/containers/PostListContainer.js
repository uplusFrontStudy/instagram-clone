import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/PostList';
import { listPosts } from '../modules/posts';

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);
  console.log(data);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return;

  return <PostList posts={data}>확인ㄴ</PostList>;
}

export default PostListContainer;
