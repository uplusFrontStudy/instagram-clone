import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileEdit from '../components/profile/ProfileEdit';
import { getProfileImage, getUserData } from '../modules/profile';

function ProfileEditContainer() {
  const { profileImage, users } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getProfileImage());
  }, [getUserData, getProfileImage]);

  return <ProfileEdit profileImage={profileImage} users={users} />;
}

export default ProfileEditContainer;
