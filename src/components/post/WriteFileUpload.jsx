import React from 'react';
import styled from 'styled-components';
import FileUpload from './FileUpload';
import mediaImage from '../../images/media.png';
import WritePreviewList from './WritePreviewList';

const WriteFileUpload = ({ onChangeImages, postFiles, ...otherProps }) => {
  return (
    <>
      {Array.isArray(postFiles) && postFiles.length !== 0 && (
        <>
          {/*  <FilePreview
            postFiles={[postFiles[0]]} //WritePreview은 배열 첫번쨰 이미지만 나옴
            onChangeImages={onChangeImages}
          /> */}
          {console.log('WriteFileUpload')}
          <CoverPreviewImage
            src={URL.createObjectURL(postFiles[0])}
            alt={`cover preview`}
          />
          <WritePreviewList
            postFiles={postFiles}
            onChangeImages={onChangeImages}
          >
            <FileUpload
              onChangeImages={onChangeImages}
              postFiles={postFiles}
              accept=".jpg,.png,.jpeg"
              multiple
              previewList
            />
          </WritePreviewList>
        </>
      )}
      {Array.isArray(postFiles) && postFiles.length === 0 && (
        <FileUpload
          onChangeImages={onChangeImages}
          postFiles={postFiles}
          accept=".jpg,.png,.jpeg"
          multiple
        >
          <DefaultUploadInfo>
            <img src={mediaImage} alt="media" />
            <h2>사진과 동영상을 여기다 끌어다 놓으세요</h2>
          </DefaultUploadInfo>
        </FileUpload>
      )}
    </>
  );
};

export default WriteFileUpload;

const CoverPreviewImage = styled.img`
  width: 100%;
`;
const DefaultUploadInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  h2 {
    margin-top: 16px;
    text-align: center;
    font-weight: 300;
    font-size: 24px;
    line-height: 26px;
  }

  img {
    height: 77px;
    width: 90px;
  }
`;
