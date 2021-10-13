import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Modal from '../components/profile/Modal';
import { uploadProfileImage } from '../modules/profile';

function ModalConatainer({ trigger, setTrigger }) {
  const dispatch = useDispatch();
  const upload = useCallback(() => {
    dispatch(uploadProfileImage());
  });
  //const upload = uploadProfileImage();
  return <Modal trigger={trigger} setTrigger={setTrigger} upload={upload} />;
}

export default ModalConatainer;
