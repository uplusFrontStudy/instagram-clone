import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import mediaImage from '../../images/media.png';
import Button from '../common/Button';

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

export default function FileUpload({
  name,
  onChangeImages,
  images,
  view,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) {
  const fileInputField = useRef(null);
  const [localFiles, setLocalFiles] = useState([]);

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  //파일 사이즈 체크 및 등등
  const addNewFiles = useCallback(
    (newFiles) => {
      let tempArray = [];
      for (let file of newFiles) {
        if (file.size <= maxFileSizeInBytes) {
          if (!otherProps.multiple) {
            return [file];
          }
          tempArray.push(file);
        }
      }

      return localFiles.concat(tempArray);
    },
    [maxFileSizeInBytes, localFiles, otherProps.multiple],
  );

  const insertFile = useCallback(
    (files) => {
      onChangeImages(files);
    },
    [onChangeImages],
  );

  const handleNewFileUpload = useCallback(
    (e) => {
      const { files: newFiles } = e.target;

      if (newFiles.length) {
        const addFiles = addNewFiles(newFiles);
        setLocalFiles(addFiles);
        insertFile(addFiles);
      }
    },
    [addNewFiles, insertFile],
  );

  const PreviewImage = ({ firstImage }) => (
    <CoverPreviewImage src={URL.createObjectURL(firstImage)} alt="image" />
  );

  useEffect(() => {
    console.log(images);
    setLocalFiles(images);
  }, [images]);

  return (
    <>
      <FileUploadContainer>
        <FormField
          type="file"
          ref={fileInputField}
          title=""
          value=""
          onChange={handleNewFileUpload}
          {...otherProps}
        />
        {name === 'coverImage' ? (
          <>
            {/* file input tag는 기본적으로 drog and drop 제공 
            title=""로 설정하면 input tag 위로 마우스를 자겨갈때 '선택된 파일 없음'이라는 텍스트가 제거
            value=""로 설정하면  파일 상태가 변경되지 않는 것을 방지할수 있다.
        */}

            {Array.isArray(localFiles) && localFiles.length !== 0 ? (
              <PreviewSection>
                <PreviewImage firstImage={localFiles[0]} />
              </PreviewSection>
            ) : (
              <DefaultUploadInfo>
                <img src={mediaImage} alt="media" />
                <h2>사진과 동영상을 여기다 끌어다 놓으세요</h2>
                <UploadFileBtn cyan onClick={handleUploadBtnClick}>
                  컴퓨터에서 선택
                </UploadFileBtn>
              </DefaultUploadInfo>
            )}
          </>
        ) : (
          <UploadFileBtn cyan onClick={handleUploadBtnClick}>
            선택
          </UploadFileBtn>
        )}
      </FileUploadContainer>
    </>
  );
}

const FileUploadContainer = styled.section`
  position: relative;
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormField = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  &:focus {
    outline: none;
  }
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

const UploadFileBtn = styled(Button)`
  margin-top: 24px;
  cursor: pointer;
  z-index: 1;
`;

const PreviewSection = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;
const CoverPreviewImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;
const Gellery = styled.div`
  position: absolute;
  background: rgba(26, 26, 26, 0.8);
  border-radius: 50%;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  cursor: pointer;
  z-index: 1;
  right: 0;
  bottom: 0;
  margin: 8px;

  img {
    padding: 8px;
  }
`;
