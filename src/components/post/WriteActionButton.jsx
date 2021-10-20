import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteActionButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 3reml button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;
function WriteActionButton({ onCancel, onPublish }) {
  return (
    <WriteActionButtonContainer>
      <StyledButton cyan onClick={onPublish}>
        게시
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonContainer>
  );
}

export default WriteActionButton;
