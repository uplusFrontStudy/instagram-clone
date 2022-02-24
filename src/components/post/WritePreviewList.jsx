import React, { useState } from 'react';
import styled from 'styled-components';
import gellery from '../../images/gellery.png';
import DraggableList from './DraggableList';
import FilePreview from './FilePreview';

const WritePreviewList = ({ postFiles, onChangeImages, children }) => {
  const [gelleyOpen, setGelleyOpen] = useState(false);

  const gelleyBtnClick = () => {
    setGelleyOpen(!gelleyOpen);
  };

  console.log('WritePreviewList');
  return (
    <>
      {Array.isArray(postFiles) && postFiles.length !== 0 && (
        <PreviewListBlock>
          <PreviewListSection gelleyOpen={gelleyOpen}>
            <PreviewList>
              <DraggableList
                postFiles={postFiles}
                onChangeImages={onChangeImages}
                listPreview
              >
                {children}
              </DraggableList>
            </PreviewList>
          </PreviewListSection>
          <GelleryBtnSection>
            <GelleryBtnWrap onClick={gelleyBtnClick}>
              <img src={gellery} alt="gelley" />
            </GelleryBtnWrap>
          </GelleryBtnSection>
        </PreviewListBlock>
      )}
    </>
  );
};

export default WritePreviewList;

const PreviewListBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const PreviewListSection = styled.section`
  display: ${(props) => (props.gelleyOpen ? 'flex' : 'none')};
  background: rgba(26, 26, 26, 0.8);
  border-radius: 8px;
  height: 118px;
`;

const PreviewList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
`;

const GelleryBtnSection = styled.article`
  display: flex;
  align-self: end;
`;

const GelleryBtnWrap = styled.div`
  display: flex;
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
