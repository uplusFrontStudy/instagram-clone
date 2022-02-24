import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import uploadBtn from '../../../src/images/uploadBtn.png';

//file input tag
//file upload button
//1. 첫번쨰 이미지가 preview로 보이는 upload
//2. 모든 이미지가 preivew로 보이는 uploadImage List

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const FileUpload = ({
  onChangeImages,
  postFiles,
  children,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  //upload button 클릭 시 -> input tag 클릭
  const fileInputField = useRef(null);
  const [uploadFiles, setUploadFiles] = useState([]);

  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  //파일 사이즈 체크
  const addNewFiles = (newFiles) => {
    let tempArray = [];
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return [file];
        }
        tempArray.push(file);
      }
    }
    return uploadFiles.concat(tempArray);
  };

  const insertFiles = (files) => {
    onChangeImages(files);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;

    if (newFiles.length) {
      const addFiles = addNewFiles(newFiles);
      setUploadFiles(addFiles);
      insertFiles(addFiles);
    }
  };

  useEffect(() => {
    setUploadFiles(postFiles);
  }, [postFiles]);

  return (
    <FileUploadBlock>
      <FormField
        type="file"
        ref={fileInputField}
        onChange={handleNewFileUpload}
        title=""
        value=""
        {...otherProps}
      />
      <UploadSection>
        {children}

        {otherProps.previewList ? (
          <PreviewListUploadBtn>
            <img src={uploadBtn} alt="uploadBtn" />
          </PreviewListUploadBtn>
        ) : (
          <UploadFileBtn cyan onClick={handleUploadBtnClick}>
            컴퓨터에서 선택
          </UploadFileBtn>
        )}
      </UploadSection>
    </FileUploadBlock>
  );
};

export default FileUpload;

const FileUploadBlock = styled.div`
  flex: auto;
  display: flex;
`;

const FormField = styled.input`
  font-size: 18px;
  display: ${(props) => (props.previewList ? 'none' : 'block')};
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

const UploadSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const UploadFileBtn = styled(Button)`
  margin-top: 24px;
  cursor: pointer;
  z-index: 1;
`;

const PreviewListUploadBtn = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  background-color: transparent;
`;
