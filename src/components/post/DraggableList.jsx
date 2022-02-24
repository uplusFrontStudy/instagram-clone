import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

//1. 첫번쨰 이미지가 preview로 보이는 upload //coverFile
//2. 모든 이미지가 preivew로 보이는 uploadImage List //postFiles
const initialGrabDate = {
  grabPosition: null,
  targetPosition: null,
  isDrag: false,
  move_left: [],
  move_right: [],
  updateList: [],
  position: null,
};

const DraggableList = ({
  postFiles,
  onChangeImages,
  children,
  ...otherProps
}) => {
  const [uploadFiles, setUploadFiles] = useState([]);
  const [grab, setGrab] = useState(initialGrabDate);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragStart = (e) => {
    console.log(`onDragStart`);
    setGrab({
      ...grab,
      grabPosition: Number(e.target.dataset.position),
      position: Number(e.target.dataset.position),
      isDrag: true,
      updateList: [...postFiles],
    });

    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnter = (e) => {
    const grabPosition = Number(grab.grabPosition);
    const listPosition = grab.position;
    const targetPosition = Number(e.target.dataset.position);
    console.log(`onDragEnter`);

    let move_left = [...grab.move_left];
    let move_right = [...grab.move_right];

    if (grabPosition > targetPosition) {
      move_left.includes(targetPosition)
        ? move_left.pop()
        : move_left.push(targetPosition);
    } else if (grabPosition < targetPosition) {
      move_right.includes(targetPosition)
        ? move_right.pop()
        : move_right.push(targetPosition);
    } else {
      move_right = [];
      move_left = [];
    }

    let data = [...grab.updateList];
    data[listPosition] = data.splice(targetPosition, 1, data[listPosition])[0];
    console.log(data[listPosition]);
    console.log(data);
    setGrab({
      ...grab,
      move_left,
      move_right,
      updateList: data,
      position: targetPosition,
    });
  };

  const onDragLeave = (e) => {
    e.target.classList.remove('move_up');
    e.target.classList.remove('move_down');

    if (Number(e.target.dataset.position) === grab.grabPosition) {
      e.target.style.visibility = 'hidden';
    }

    setGrab({
      ...grab,
      targetPosition: null,
    });
  };

  //요소를 드롭할 경우 발생
  const onDrop = (e) => {
    console.log(`onDrop`);
    console.log(grab);

    e.dataTransfer.dropEffect = 'move';

    setUploadFiles(grab.updateList);
    onChangeImages(grab.updateList);

    setGrab({
      ...grab,
      grabPosition: null,
      targetPosition: null,
      move_left: [],
      move_right: [],
      isDrag: false,
    });

    e.target.style.visibility = 'visible';
  };

  const onRemove = ({ filename }) => {
    const nextPostFiles = uploadFiles.filter(
      (image) => image.name !== filename,
    );
    setUploadFiles(nextPostFiles);
    onChangeImages(nextPostFiles);
  };

  useEffect(() => {
    console.log('확인');
    setUploadFiles(postFiles);
  }, [postFiles]);

  console.log(uploadFiles);
  return (
    <FileReviewBlock>
      <PreviewSection>
        {uploadFiles &&
          Object.keys(uploadFiles).map((fileName, index) => {
            let file = uploadFiles[fileName];
            let isImageFile = file.type.split('/')[0] === 'image';
            let classNames = '';

            if (grab && (grab.move_left || grab.move_right)) {
              grab.move_left.includes(index) && (classNames = 'move_left');
              grab.move_right.includes(index) && (classNames = 'move_right');
            }

            return (
              <PreviewItemContainer key={fileName} {...otherProps}>
                {isImageFile && (
                  <ImagePreview
                    src={URL.createObjectURL(file)}
                    alt={`file preview ${file.name}`}
                    className={classNames}
                    data-position={index}
                    draggable="true"
                    onDragOver={onDragOver}
                    onDragStart={onDragStart}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDragEnd={onDrop}
                    isDrag={grab && grab.isDrag}
                  />
                )}
              </PreviewItemContainer>
            );
          })}
        {children}
      </PreviewSection>
    </FileReviewBlock>
  );
};

export default DraggableList;

const FileReviewBlock = styled.div`
  display: flex;
  flex: auto;
  position: relative;
`;

const PreviewSection = styled.section`
  display: flex;
  flex-direction: row;
`;

const FileMetaData = styled.div`
  display: none;
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

const PreviewItemContainer = styled.div`
  height: 100%;
  width: 97px;
  margin-right: 8px;
  position: relative;

  /*  ${(props) =>
    props.listPreview &&
    css`
      cursor: grab;
      &.grabbing {
        cursor: grabbing;
      }
    `};  ${(props) =>
    props.listPreview &&
    css`
      &:hover {
        opacity: 0.55;
        ${FileMetaData} {
          display: flex;
        }
      }
    `} */
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  ${(props) => props.isDrag && 'transition: transform 200ms ease 0s'};

  &.grabbing {
    cursor: grabbing;
  }

  &.move_left {
    z-index: 11;
    transform: translate(97px, 0);
  }

  &.move_right {
    z-index: 11;
    transform: translate(-97px, 0);
  }
`;
