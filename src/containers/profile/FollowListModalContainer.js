import React from 'react';
import { useSelector } from 'react-redux';
import FollowListModal from '../../components/profile/FollowListModal';

const FollowListModalContainer = ({
  buttonName,
  loginUser,
  visible,
  onCancle,
}) => {
  const { followUsersData } = useSelector(({ profile }) => ({
    followUsersData: profile.followUsers,
  }));

  return (
    <FollowListModal
      buttonName={buttonName}
      followUsersData={followUsersData}
      loginUser={loginUser}
      visible={visible}
      onCancle={onCancle}
    />
  );
};

export default FollowListModalContainer;
