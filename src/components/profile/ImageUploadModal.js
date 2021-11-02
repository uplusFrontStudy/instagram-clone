import React, { useRef } from 'react';
import Modal from '../common/Modal';
import styled from 'styled-components';

const ImageUploadModal = ({ visible, user, onCancle, onUpdateImage }) => {
  const inputRef = useRef();

  if (!visible || !user) {
    return null;
  }

  const onInputClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  async function uploadProfile(event) {
    const file = event.target.files[0];
    await onUpdateImage('upload', user, file);
    await onCancle();
  }

  async function deleteProfile() {
    await onUpdateImage('delete', user);
    await onCancle();
  }

  return (
    <Modal
      visible={true}
      title={'프로필 사진 바꾸기'}
      closeButton={false}
      content={
        <>
          <FileInput
            ref={inputRef}
            type="file"
            accept="image/*"
            name="profile"
            onChange={uploadProfile}
          />
          <ColorButton red onClick={onInputClick}>
            사진 업로드
          </ColorButton>
          <ColorButton blue onClick={deleteProfile}>
            현재 사진 삭제
          </ColorButton>
          <Button onClick={() => onCancle()}>취소</Button>
        </>
      }
    />
  );
};

export default ImageUploadModal;

const Button = styled.button`
  background-color: transparent;
  outline: 0;
  border: 0;
  width: 100%;
  height: 47px;
  font-size: 14px;
  cursor: pointer;
`;

const ColorButton = styled(Button)`
  color: ${(props) => (props.red ? '#ed4956' : '#0095f6')};
  font-weight: 700;
`;

const FileInput = styled.input`
  display: none;
`;
