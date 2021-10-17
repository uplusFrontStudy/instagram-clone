import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FileUpload from '../components/post/FileUpload';
import { changeField } from '../modules/write';

const WriteFileUploadContainer = () => {
  const dispatch = useDispatch();
  const { coverImages } = useSelector(({ write }) => ({
    coverImages: write.coverImages,
  }));

  const onChangeImages = (newFiles) => {
    dispatch(
      changeField({
        key: 'coverImages',
        value: newFiles,
      }),
    );
  };

  return (
    <FileUpload
      accept=".jpg,.png,.jpeg"
      onChangeImages={onChangeImages}
      images={coverImages}
    />
  );
};

export default WriteFileUploadContainer;
