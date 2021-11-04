import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import UserList from './UserList';

const FollowListModal = ({
  buttonName,
  followUsersData,
  loginUser,
  visible,
  onCancle,
}) => {
  if (!visible || !followUsersData) {
    return null;
  }

  const title = (
    <>
      <div></div>
      <h1>{buttonName}</h1>
      <div onClick={onCancle}>
        <svg
          aria-label="닫기"
          className="_8-yf5 "
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 48 48"
          width="24"
        >
          <path
            clipRule="evenodd"
            d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </>
  );
  return (
    <Modal
      visible={visible}
      title={title}
      onCancle={onCancle}
      closeButton={true}
    >
      {followUsersData.length === 0 && (
        <Content>
          {buttonName === '팔로워' ? (
            <div>
              <h4>🙅‍♀️</h4>
              <h5>팔로워</h5>
              <p>회원님을 팔로우하는 모든 사람이 여기에 표시됩니다.</p>
            </div>
          ) : (
            <div>
              <h4>🙅‍♀️</h4>
              <h5>회원님이 팔로우하는 사람</h5>
              <p>회원님이 팔로우하는 사람들이 여기에 표시됩니다.</p>
            </div>
          )}
        </Content>
      )}

      {followUsersData.length > 0 && (
        <UserList
          users={followUsersData}
          loginUser={loginUser}
          onCancle={onCancle}
        />
      )}
    </Modal>
  );
};

export default FollowListModal;
const Content = styled.div`
  padding: 2rem;
  text-align: center;

  h4 {
    font-size: 80px;
  }

  h5 {
    font-weight: 300;
    font-size: 22px;
    padding-bottom: 20px;
    padding-top: 20px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }
`;
