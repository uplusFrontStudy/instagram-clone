import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Write from '../components/post/Write';
import { changeField, initialize, writePost } from '../modules/write';

const WriteContainer = () => {
  const dispath = useDispatch();
  const { images, content, post, postError } = useSelector(({ write }) => ({
    images: write.images,
    content: write.content,
    post: write.post,
    postError: write.postError,
  }));

  const onChangeField = useCallback(
    (paylod) => {
      dispath(changeField(paylod));
    },
    [dispath],
  );

  const onPublish = (e) => {
    e.preventDefault();
    dispath(
      writePost({
        content,
        images,
      }),
    );
  };

  useEffect(() => {
    return () => {
      dispath(initialize());
    };
  }, [dispath]);

  return (
    <Write
      onChangeField={onChangeField}
      onPublish={onPublish}
      images={images}
      content={content}
    />
  );
};

export default WriteContainer;
