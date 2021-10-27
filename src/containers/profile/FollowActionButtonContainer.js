import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FollowActionButton from '../../components/profile/FollowActionButton';
import { updateLoginUser, updateUser } from '../../modules/profile';

const FollowActionButtonContainer = ({ user, visibleProfileEditButton }) => {
  const dispatch = useDispatch();

  const { loginUser, followUserData } = useSelector(({ profile }) => ({
    loginUser: profile.loginUser,
    followUserData: profile.followUserData,
  }));

  const editUser = useCallback(
    (user) => dispatch(updateUser(user)),
    [dispatch],
  );

  const editLoginUser = useCallback(
    (loginUser) => dispatch(updateLoginUser(loginUser)),
    [dispatch],
  );

  return (
    <FollowActionButton
      user={user}
      loginUser={loginUser}
      editUser={editUser}
      editLoginUser={editLoginUser}
      visibleProfileEditButton={visibleProfileEditButton}
    />
  );
};

export default FollowActionButtonContainer;
