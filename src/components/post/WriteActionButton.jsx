import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

/* const WriteActionButtonContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 3reml button + button {
    margin-left: 0.5rem;
  }
`; */

const StyledButton = styled(Button)`
  height: 2.125rem;
  width: 50px;
  & + & {
    margin-left: 0.5rem;
  }
`;
function WriteActionButton({ onPublish, onViewChange, view }) {
  return (
    <>
      {view === 'upload' ? (
        <StyledButton cyan onClick={() => onViewChange('content')}>
          다음
        </StyledButton>
      ) : (
        <StyledButton cyan onClick={onPublish}>
          게시
        </StyledButton>
      )}
    </>
  );
}

export default WriteActionButton;
