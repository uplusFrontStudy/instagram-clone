import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageUploadModal from '../../components/profile/ImageUploadModal';
import { updateImage } from '../../modules/profile';

const ImageUploadModalContainer = ({ visible, onCancle }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ profile }) => ({
    user: profile.user,
  }));

  const updateProfileImage = useCallback(
    (params) => dispatch(updateImage(params)),
    [dispatch],
  );

  return (
    <ImageUploadModal
      visible={visible}
      user={user}
      onCancle={onCancle}
      onUpdateImage={updateProfileImage}
    />
  );
};

export default ImageUploadModalContainer;
