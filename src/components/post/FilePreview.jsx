import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import plusImg from '../../images/plus.png';
import deleteImg from '../../images/delete.png';

const FilePreviewContainer = styled.article`
  height: 100%;
  height: 100%;
`;

const PreviewList = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const FileMetaData = styled.div`
  // display: ${(props) => (props.isImageFile ? 'none' : 'flex')};
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  margin: auto;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  font-size: 10px;
  background-color: rgba(5, 5, 5, 0.55);
`;

const RemoveFileIcon = styled.a`
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

const PreviewContainer = styled.div`
  width: 62px;
  border-radius: 4px;
  position: relative;
  box-sizing: border-box;
  margin-left: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0 auto 10px;

  &:hover {
    opacity: 0.55;

    ${FileMetaData} {
      display: flex;
    }
  }
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

const PreviewItem = React.memo(({ file, onRemove }) => (
  <>
    <ImagePreview
      src={URL.createObjectURL(file)}
      alt={`file preview ${file.name}`}
    />
    <FileMetaData isImageFile={true}>
      <RemoveFileIcon onClick={() => onRemove(file.name)}>
        <img src={deleteImg} alt="delete" />
      </RemoveFileIcon>
    </FileMetaData>
  </>
));

//React.memo를 사용하여 psotImages값이 바뀔때만 리렌더링되도(록 처리
const Preview = React.memo(({ images, onRemove }) => (
  <>
    {Object.keys(images).map((fileName) => {
      console.log(images);
      let file = images[fileName];
      let isImageFile = file.type.split('/')[0] === 'image';

      return (
        <PreviewContainer key={fileName}>
          <div>
            {isImageFile && <PreviewItem file={file} onRemove={onRemove} />}
          </div>
        </PreviewContainer>
      );
    })}
  </>
));

const FilePreview = ({ onChangeImages, postImages, children }) => {
  const [localPostImages, setLocalPostImages] = useState([]);

  const onRemove = useCallback(
    (filename) => {
      const nextPostImages = localPostImages.filter(
        (image) => image.name !== filename,
      );
      setLocalPostImages(nextPostImages);
      onChangeImages(nextPostImages);
    },
    [localPostImages, onChangeImages],
  );

  //postImages가 바뀔 때
  useEffect(() => {
    console.log('FilePreview');
    setLocalPostImages(postImages);
  }, [postImages]);

  return (
    <FilePreviewContainer>
      <PreviewList>
        {postImages && <Preview images={localPostImages} onRemove={onRemove} />}
        <FileUploadBtn>
          {children}
          <Image src={plusImg} alt="plus" />
        </FileUploadBtn>
      </PreviewList>
    </FilePreviewContainer>
  );
};

export default FilePreview;