import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/write';
import WritePreview from '../../components/post/WritePreview';
import styled from 'styled-components';
import WriteFileUpload from '../../components/post/WriteFileUpload';

const WriteFilePreviewContainer = ({ children }) => {
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
  console.log('WriteFilePreviewContainer');
  return <WritePreview postFiles={postFiles} onChangeImages={onChangeImages} />;
};

export default WriteFilePreviewContainer;
