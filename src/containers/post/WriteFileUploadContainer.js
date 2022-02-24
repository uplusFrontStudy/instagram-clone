import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import WriteFileUpload from '../../components/post/WriteFileUpload';
import { changeField } from '../../modules/write';

const WriteFileUploadContainer = () => {
  const dispatch = useDispatch();
  const { postFiles } = useSelector(({ write }) => ({
    postFiles: write.postFiles,
  }));

  const onChangeImages = useCallback(
    (newFiles) => {
      dispatch(
        changeField({
          key: 'postFiles',
          value: newFiles,
        }),
      );
    },
    [dispatch],
  );
  console.log('WriteFileUploadContainer');
  return (
    <WriteFileUpload onChangeImages={onChangeImages} postFiles={postFiles} />
  );
};

export default WriteFileUploadContainer;
