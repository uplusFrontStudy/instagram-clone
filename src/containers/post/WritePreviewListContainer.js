import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileUpload from '../../components/post/FileUpload';
import WriteFileUpload from '../../components/post/WriteFileUpload';
import WritePreviewList from '../../components/post/WritePreviewList';
import { changeField } from '../../modules/write';

const WritePreviewListContainer = () => {
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
  console.log('WritePreviewListContainer');
  return (
    <WritePreviewList postFiles={postFiles} onChangeImages={onChangeImages}>
      <FileUpload
        onChangeImages={onChangeImages}
        postFiles={postFiles}
        name="coverImage"
        accept=".jpg,.png,.jpeg"
        multiple
        previewList
      />
    </WritePreviewList>
  );
};

export default WritePreviewListContainer;
