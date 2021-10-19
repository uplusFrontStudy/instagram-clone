import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FileUpload from '../components/post/FileUpload';
import { changeField } from '../modules/write';

const WriteFileUploadContainer = () => {
  const dispatch = useDispatch();
  const { coverImage } = useSelector(({ write }) => ({
    coverImage: write.coverImage,
  }));

  const onChangeImages = useCallback(
    (newFiles) => {
      dispatch(
        changeField({
          key: 'coverImage',
          value: newFiles,
        }),
      );
    },
    [dispatch],
  );

  return (
    <FileUpload
      accept=".jpg,.png,.jpeg"
      onChangeImages={onChangeImages}
      images={coverImage}
    />
  );
};

export default WriteFileUploadContainer;
