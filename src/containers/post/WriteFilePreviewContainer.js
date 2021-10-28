import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FilePreview from '../../components/post/FilePreview';
import FileUpload from '../../components/post/FileUpload';
import { changeField } from '../../modules/write';

const WriteFilePreviewContainer = () => {
  const dispatch = useDispatch();
  const { postImages } = useSelector(({ write }) => ({
    postImages: write.postImages,
  }));

  const onChangeImages = useCallback(
    (newFiles) => {
      dispatch(
        changeField({
          key: 'postImages',
          value: newFiles,
        }),
      );
    },
    [dispatch],
  );

  return (
    <FilePreview postImages={postImages} onChangeImages={onChangeImages}>
      {/*  <FileUpload
        accept=".jpg,.png,.jpeg"
        multiple
        onChangeImages={onChangeImages}
        images={postImages}
      /> */}
    </FilePreview>
  );
};

export default WriteFilePreviewContainer;
