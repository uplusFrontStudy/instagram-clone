import React from 'react';
import { useSelector } from 'react-redux';
import { updateUser } from '../../api/profile';
import ProfileEdit from '../../components/profile/ProfileEdit';

function ProfileEditContainer() {
  const { user } = useSelector((state) => state.profile);

  const editUser = (user) => {
    updateUser(user);
  };

  return (
    <>
      <ProfileEdit user={user} onEditUser={editUser} />
    </>
  );
}

export default ProfileEditContainer;
