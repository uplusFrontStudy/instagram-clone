import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import EditModal from '../../components/profile/EditModal';
import { updateUser } from '../../modules/profile';

const EditModalContainer = ({ visible, onCancle, currentUser }) => {
  const dispatch = useDispatch();

  const editUser = useCallback(
    (user) => dispatch(updateUser(user)),
    [dispatch],
  );

  return (
    <EditModal
      visible={visible}
      onCancle={onCancle}
      currentUser={currentUser}
      onEdit={editUser}
    />
  );
};

export default EditModalContainer;
