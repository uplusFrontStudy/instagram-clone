import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../common/Modal';
import WriteActionButton from './WriteActionButton';

const WriteModal = ({
  visible,
  onCancle,
  onPublish,
  onViewChange,
  children,
  view,
}) => {
  if (!visible) {
    return null;
  }

  const title = (
    <Title>
      <div></div>
      <h1>새 게시물 만들기</h1>
      <WriteActionButton
        onPublish={onPublish}
        onViewChange={onViewChange}
        view={view}
      />
    </Title>
  );

  return (
    <StyledModal visible={visible} title={title} onCancle={onCancle} writeModal>
      <Wrap>
        <WriteArticle>{children}</WriteArticle>
      </Wrap>
    </StyledModal>
  );
};

export default WriteModal;

const Title = styled.div`
  width: 100% !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: #0095f6;
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
`;
const StyledModal = styled(Modal)`
  margin: 20px;
`;

const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  /*   height: 750px;
  width: 750px;
  max-height: min(calc(100vw - 372px), 855px);
  max-width: min(calc(100vw - 372px), 855px);
  min-height: 348px;
  min-width: 348px; */
`;

const WriteArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: none;
  width: 100%;
`;
