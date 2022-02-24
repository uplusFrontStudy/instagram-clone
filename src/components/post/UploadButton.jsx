import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const UploadButton = ({ children, fileInputField, ...props }) => {
  const handleUploadBtnClick = () => {
    fileInputField.current.click();
  };

  return (
    <UploadFileBtn onClick={handleUploadBtnClick} {...props}>
      {children}
    </UploadFileBtn>
  );
};

const UploadFileBtn = styled(Button)`
  margin-top: 24px;
  cursor: pointer;
  z-index: 1;
`;

export default UploadButton;
