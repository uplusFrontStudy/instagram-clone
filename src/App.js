import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ProfilePage from './pages/ProfilePage';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './modules/user';
import PrivateRoute from './lib/PrivateRoute';
import { useSelector } from 'react-redux';
import { getLoginUser } from './modules/profile';

function App() {
  const { loading } = useSelector(({ loading }) => ({
    loading: loading['user/SET_USER'],
  }));
  const dispatch = useDispatch();
  let location = useLocation();
  let background = location.state && location.state.background;

  useEffect(() => {
    onAuthStateChanged(getAuth(), (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', authUser['uid']);
        dispatch(setUser(authUser['uid']));
        dispatch(getLoginUser(authUser['uid']));
      } else {
        localStorage.removeItem('authUser');
      }
    });
  }, [dispatch]);

  if (loading) return null;

  return (
    <>
      <Switch location={background || location}>
        <PrivateRoute path="/" exact>
          <DashboardPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/:userid">
          <ProfilePage />
        </Route>
        <Route path="/:username/:postId">
          <PostPage />
        </Route>
      </Switch>

      {background && (
        <PrivateRoute path="/write">
          <WritePage />
        </PrivateRoute>
      )}
    </>
  );
}

export default App;
