import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../../components/post/PostList';
import PostModal from '../../components/post/PostModal';
import { readPost } from '../../modules/post';
import { listPosts } from '../../modules/posts';

const PostListContainer = () => {
  const { posts, postsError, postsLoading, postError, post, postLoading } =
    useSelector(({ posts, post, loading }) => ({
      posts: posts.posts,
      postsError: posts.error,
      postsLoading: loading['posts/LIST_POSTS'],
      post: post.post,
      postError: post.error,
      postLoading: loading['post/READ_POST'],
    }));
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const getPost = (docId) => {
    dispatch(readPost(docId));
    setModal(true);
  };

  const onCancle = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  if (postsLoading) return <div>로딩중..</div>;
  if (postsError) return <div>에러발생</div>;
  if (!posts) return null;

  if (postLoading) return <div>로딩중..</div>;
  if (postError) return <div>에러발생</div>;
  if (!posts) return null;

  return (
    <>
      <PostList posts={posts.data} getPost={getPost} />
      <PostModal visible={modal} data={post} onCancle={onCancle} key={post} />
    </>
  );
};

export default PostListContainer;
