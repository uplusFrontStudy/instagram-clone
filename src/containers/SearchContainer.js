import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/common/Search';
import SearchResultModal from '../components/common/SearchResultModal';
import { getUsers } from '../modules/profile';

const SearchContainer = ({}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);

  const { loginUser, searchUsers } = useSelector(({ profile }) => ({
    loginUser: profile.loginUser,
    searchUsers: profile.users,
  }));

  const onSearch = (keyword) => {
    dispatch(getUsers(keyword));
  };
  return (
    <>
      <Search
        onSearch={onSearch}
        onShowModal={showModal}
        onHideModal={hideModal}
      />
      <SearchResultModal
        visible={modal}
        searchUsers={searchUsers}
        loginUser={loginUser}
        onCancle={hideModal}
      />
    </>
  );
};

export default SearchContainer;
