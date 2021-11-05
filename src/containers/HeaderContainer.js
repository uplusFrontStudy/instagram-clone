import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../components/common/Header';
import { logout } from '../modules/user';

const HeaderContainer = () => {
  const history = useHistory();
  const { user } = useSelector(({ user, loading }) => ({
    user: user.user,
    loadingUser: loading.SET_USER,
  }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
