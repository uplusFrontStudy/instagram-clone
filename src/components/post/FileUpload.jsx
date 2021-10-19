import React, { useCallback, useEffect, useState } from 'react';
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
  onChangeImages,
  images,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) {
  const [files, setFiles] = useState([]);
  const [localFiles, setLocalFiles] = useState([]);

  //파일 사이즈 체크 및 등등
  const addNewFiles = useCallback(
    (newFiles) => {
      let tempArray = [];
      for (let file of newFiles) {
        if (file.size <= maxFileSizeInBytes) {
          tempArray.push(file);
        }
      }

      return localFiles.concat(tempArray);
    },
    [maxFileSizeInBytes, localFiles],
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

  useEffect(() => {
    console.log('FileUload');
    setLocalFiles(images);
  }, [images]);

  return (
    <>
      <FileUploadContainer>
        <FormField type="file" onChange={handleNewFileUpload} {...otherProps} />
        {files &&
          !otherProps.multiple &&
          Object.keys(files).map((filename, index) => {
            let file = files[filename];
            return (
              <CoverPreviewImage
                src={URL.createObjectURL(file)}
                alt="coverImage"
                key={index}
              ></CoverPreviewImage>
            );
          })}
      </FileUploadContainer>
    </>
  );
}
