import React from 'react';
import { useSelector } from 'react-redux';
import FollowListModal from '../../components/profile/FollowListModal';

const FollowListModalContainer = ({ visible, title, onCancle, loginUser }) => {
  const { followUsers } = useSelector(({ profile, user }) => ({
    //loginUser: user.user,
    followUsers: profile.followUsers,
  }));

  return (
    <FollowListModal
      visible={visible}
      title={title}
      followUsers={followUsers}
      onCancle={onCancle}
      loginUser={loginUser}
    />
  );
};

export default FollowListModalContainer;
