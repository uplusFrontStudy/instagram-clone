import React from 'react';
import { useSelector } from 'react-redux';
import FollowListModal from '../../components/profile/FollowListModal';

const FollowListModalContainer = ({ visible, title, onCancle }) => {
  const { followUsers } = useSelector(({ profile }) => ({
    //loginUser: profile.loginUser,
    followUsers: profile.followUsers,
  }));

  return (
    <FollowListModal
      visible={visible}
      title={title}
      followUsers={followUsers}
      onCancle={onCancle}
    />
  );
};

export default FollowListModalContainer;
