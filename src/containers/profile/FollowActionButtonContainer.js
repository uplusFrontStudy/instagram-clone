import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import FollowActionButton from '../../components/profile/FollowActionButton';
import { updateLoginUser, updateUser } from '../../modules/profile';

const FollowActionButtonContainer = ({
  currentUser,
  loginUser,
  visibleProfileEditButton,
}) => {
  const dispatch = useDispatch();

  const editCurrentUser = useCallback(
    (currentUser) => dispatch(updateUser(currentUser)),
    [dispatch],
  );

  const editLoginUser = useCallback(
    (loginUser) => dispatch(updateLoginUser(loginUser)),
    [dispatch],
  );

  return (
    <FollowActionButton
      currentUser={currentUser}
      loginUser={loginUser}
      editCurrentUser={editCurrentUser}
      editLoginUser={editLoginUser}
      visibleProfileEditButton={visibleProfileEditButton}
    />
  );
};

export default FollowActionButtonContainer;
