import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import WriteActionButton from '../../components/post/WriteActionButton';
import { writePost } from '../../modules/write';

const WriteActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { coverImage, postImages, content, post, postError } = useSelector(
    ({ write }) => ({
      coverImage: write.coverImage,
      postImages: write.postImages,
      content: write.content,
      post: write.post,
      postError: write.postError,
    }),
  );

  const onPublish = (e) => {
    e.preventDefault();
    dispatch(
      writePost({
        content,
        coverImage,
        postImages,
      }),
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/`);
    }

    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
    ></WriteActionButton>
  );
};

export default withRouter(WriteActionButtonContainer);
