import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FollowActionButtonContainer from '../../containers/profile/FollowActionButtonContainer';
import defaultImg from '../../images/profile_default_image.png';
import palette from '../../lib/styles/palettes';
import Modal from '../common/Modal';

const FollowListModal = ({
  visible,
  title,
  followUsers,
  onCancle,
  loginUser,
}) => {
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
              <TextBox>
                <h4>🙅‍♀️</h4>
                <h5>팔로워</h5>
                <p>회원님을 팔로우하는 모든 사람이 여기에 표시됩니다.</p>
              </TextBox>
            ) : (
              <TextBox>
                <h4>🙅‍♀️</h4>
                <h5>회원님이 팔로우하는 사람</h5>
                <p>회원님이 팔로우하는 사람들이 여기에 표시됩니다.</p>
              </TextBox>
            )
          ) : (
            followUsers.map((user) => (
              <li className="follow-user" key={user.uid}>
                <div>
                  <Link to={`../profile/${user.userId}`}>
                    <img
                      src={user.profileURL || defaultImg}
                      alt="프로필이미지"
                    />
                  </Link>
                  <div>
                    <p className="userid">{user.userId}</p>
                    <p className="username">{user.userName}</p>
                  </div>
                </div>
                <FollowActionButtonContainer
                  currentUser={user}
                  loginUser={loginUser}
                  visibleProfileEditButton={false}
                />
              </li>
            ))
          )}
        </List>
      }
    />
  );
};

export default FollowListModal;

const List = styled.ul`
  padding-top: 40px;
  padding-bottom: 40px;

  & > .follow-user {
    padding: 0.5rem;
  }

  & > .follow-user img {
    width: 45px;
    height: 45px;
    border: 0.5px solid ${palette.gray[5]};
    border-radius: 50%;
  }

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  & li > div {
    display: flex;
  }

  & li img {
    margin-right: 20px;
  }

  & li .userid {
    font-weight: 600;
    margin-bottom: 5px;
  }

  & li .username {
    font-weight: 400;
    color: ${palette.gray[6]};
  }
`;

const TextBox = styled.div`
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
