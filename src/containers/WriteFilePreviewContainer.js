import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FilePreview from '../components/post/FilePreview';
import FileUpload from '../components/post/FileUpload';
import { changeField } from '../modules/write';

const WriteFilePreviewContainer = () => {
  const dispatch = useDispatch();
  const { psotImages } = useSelector(({ write }) => ({
    psotImages: write.psotImages,
  }));

  const [localPostImages, setLocalPostImages] = useState([]);

  const onChangeImages = (newFiles) => {
    console.log(newFiles);
    setLocalPostImages(newFiles);
    dispatch(
      changeField({
        key: 'postImages',
        value: newFiles,
      }),
    );
  };

  useEffect(() => {
    setLocalPostImages(psotImages);
  }, [psotImages]);

  return (
    <FilePreview psotImages={localPostImages}>
      <FileUpload
        accept=".jpg,.png,.jpeg"
        multiple
        onChangeImages={onChangeImages}
        images={psotImages}
      />
    </FilePreview>
  );
};

export default WriteFilePreviewContainer;
