import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FileUpload from '../components/post/FileUpload';
import { changeField } from '../modules/write';

const WriteFileUploadContainer = ({ name, ...otherProps }) => {
  const dispatch = useDispatch();
  const { coverImage, postImages } = useSelector(({ write }) => ({
    coverImage: write.coverImage,
    postImages: write.postImages,
  }));

  const onChangeImages = useCallback(
    (paylod) => {
      dispatch(changeField(paylod));
    },
    [dispatch],
  );

  return (
    <FileUpload
      name={name}
      onChangeImages={onChangeImages}
      images={name === 'coverImage' ? coverImage : postImages}
      {...otherProps}
    />
  );
};

export default WriteFileUploadContainer;
