import React from 'react';
import { useSelector } from 'react-redux';
import { updateUser } from '../../api/profile';
import ProfileEdit from '../../components/profile/ProfileEdit';

function ProfileEditContainer() {
  const { user, loginUser } = useSelector(({ profile }) => ({
    user: profile.user,
    loginUser: profile.loginUser,
  }));

  const editUser = (loginUser) => {
    updateUser(loginUser);
  };

  return (
    <>
      <ProfileEdit user={user} onEditUser={editUser} loginUser={loginUser} />
    </>
  );
}

export default ProfileEditContainer;
