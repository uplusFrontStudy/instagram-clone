import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../components/profile/Modal';
import { deleteImage, uploadImage } from '../../modules/profile';

function ModalConatainer({ trigger, setTrigger }) {
  const dispatch = useDispatch();
  const { user } = useSelector(({ profile }) => ({
    user: profile.user,
  }));

  const uploadProfileImage = useCallback(
    (file, user) => dispatch(uploadImage(file, user)),
    [dispatch],
  );

  const deleteProfileImage = useCallback(
    (user) => dispatch(deleteImage(user)),
    [dispatch],
  );

  return (
    <Modal
      trigger={trigger}
      setTrigger={setTrigger}
      user={user}
      onUpload={uploadProfileImage}
      onDelete={deleteProfileImage}
    />
  );
}

export default ModalConatainer;
