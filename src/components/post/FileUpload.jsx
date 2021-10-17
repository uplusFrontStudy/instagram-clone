import React, { useState } from 'react';
import styled from 'styled-components';

export const FileUploadContainer = styled.section`
  position: relative;
  border: 2px dotted lightgray;
  padding: 35px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  height: 100%;
`;

export const FormField = styled.input`
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

export const CoverPreviewImage = styled.img`
  position: absolute;
  width: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

export const DragDropText = styled.p`
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 12px;
`;
const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

export default function FileUpload({
  updateFilesCb,
  onChangeImages,
  images,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) {
  const [files, setFilse] = useState({});

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const insertFile = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    onChangeImages(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let addFiles = addNewFiles(newFiles);
      setFilse(addFiles);
      insertFile(addFiles);
    }
  };

  return (
    <>
      <FileUploadContainer>
        <FormField type="file" onChange={handleNewFileUpload} {...otherProps} />
        {files &&
          !otherProps.multiple &&
          Object.keys(files).map((filename) => {
            let file = files[filename];
            return (
              <CoverPreviewImage
                src={URL.createObjectURL(file)}
                alt="coverImage"
              ></CoverPreviewImage>
            );
          })}
      </FileUploadContainer>
    </>
  );
}
