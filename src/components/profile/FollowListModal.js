import React from 'react';
import FollowActionButtonContainer from '../../containers/profile/FollowActionButtonContainer';
import Modal from '../common/Modal';
import defaultImg from '../../images/profile_default_image.png';
import styled from 'styled-components';
import palette from '../../lib/styles/palettes';

const FollowListModal = ({ visible, title, followUsers, onCancle }) => {
  if (!visible || !followUsers) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      title={title}
      onCancle={onCancle}
      closeButton={true}
      content={
        <List>
          {followUsers.length === 0 ? (
            title === '팔로워' ? (
              <div>
                팔로워 회원님을 팔로우하는 모든 사람이 여기에 표시됩니다.
              </div>
            ) : (
              <div>
                회원님이 팔로우하는 사람 회원님이 팔로우하는 사람들이 여기에
                표시됩니다.
              </div>
            )
          ) : (
            followUsers.map((user) => (
              <div className="follow-user" key={user.userId}>
                <img src={user.profileURL || defaultImg} alt="프로필이미지" />
                <p>{user.userId}</p>
                <p>{user.userName}</p>
                <FollowActionButtonContainer
                  user={user}
                  visibleProfileEditButton={false}
                />
              </div>
            ))
          )}
        </List>
      }
    />
  );
};

export default FollowListModal;

const List = styled.ul`
  & > .follow-user {
    padding: 0.5rem;
  }

  & > .follow-user img {
    width: 40px;
    height: 40px;
    border: 0.5px solid ${palette.gray[5]};
    border-radius: 50%;
  }
`;
