import React from 'react';
import UserList from '../profile/UserList';
import Modal from './Modal';
import styled from 'styled-components';
import palette from '../../lib/styles/palettes';

const SearchResultModal = ({ visible, searchUsers, loginUser, onCancle }) => {
  if (!searchUsers) {
    return null;
  }
  return (
    <Modal visible={visible} isSearchModal={true}>
      <Content>
        {searchUsers.length === 0 ? (
          <div>
            <p>검색 결과가 없습니다.</p>
          </div>
        ) : (
          <UserList
            users={searchUsers}
            loginUser={loginUser}
            onCancle={onCancle}
          />
        )}
      </Content>
    </Modal>
  );
};

export default SearchResultModal;

const Content = styled.div`
  height: 250px;
  font-size: 14px;
  color: ${palette.gray[6]};

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
