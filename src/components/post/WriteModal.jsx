import React from 'react';
import Modal from '../common/Modal';

const WriteModal = ({ visible, title, onCancle }) => {
  if (!visible) {
    return;
  }

  return (
    <Modal
      visible={visible}
      title={title}
      onCancle={onCancle}
      closeButton={true}
    ></Modal>
  );
};

export default WriteModal;
