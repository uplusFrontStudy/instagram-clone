import React from 'react';
import styled from 'styled-components';
import plusImg from '../../images/plus.png';

const FilePreviewContainer = styled.article`
  height: 100%;
  height: 100%;
`;

const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const PreviewContainer = styled.section`
  width: 62px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-left: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0 auto 10px;
`;

const ImagePreview = styled.img`
  border: 1px solid #efefef;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const FileUploadBtn = styled.div`
  position: relative;
  width: 62px;
  height: 100%;
  margin-left: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

const FilePreview = ({ psotImages, children }) => {
  return (
    <FilePreviewContainer>
      <PreviewList>
        {psotImages &&
          Object.keys(psotImages).map((fileName, index) => {
            let file = psotImages[fileName];
            let isImageFile = file.type.split('/')[0] === 'image';

            return (
              <PreviewContainer key={fileName}>
                <div>
                  {isImageFile && (
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt={`file preview ${index}`}
                    />
                  )}
                </div>
              </PreviewContainer>
            );
          })}
        <FileUploadBtn>
          {children}
          <Image src={plusImg} alt="plus" />
        </FileUploadBtn>
      </PreviewList>
    </FilePreviewContainer>
  );
};

export default FilePreview;
