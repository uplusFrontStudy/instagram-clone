import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PostModal from '../../components/post/PostModal';

const PostModalContainer = () => {
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log(post);
    if (post) setModal(true);
  }, [post]);

  const onCancle = () => {
    setModal(false);
  };

  return (
    <PostModal
      visible={modal}
      post={post}
      error={error}
      loading={loading}
      onCancle={onCancle}
    />
  );
};

export default PostModalContainer;
