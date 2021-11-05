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
    const type = 'upload';
    await onUpdateImage({ type, user, file });
    await onCancle();
  }

  async function deleteProfile() {
    const type = 'delete';
    await onUpdateImage({ type, user });
    await onCancle();
  }

  const title = (
    <>
      <div></div>
      <h1>프로필 바꾸기</h1>
      <div></div>
    </>
  );

  return (
    <Modal visible={true} title={title} onCancle={onCancle}>
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
    </Modal>
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
