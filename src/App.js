import React, { useEffect } from 'react';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './modules/user';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (authUser) => {
      console.log(`App : ${authUser}`);
      if (authUser) {
        localStorage.setItem('authUser', authUser['uid']);
        dispatch(setUser(authUser['uid']));
      } else {
        localStorage.removeItem('authUser');
      }
    });
  }, [dispatch]);

  return (
    <>
      <Route component={PostListPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ProfilePage} path="/profile/:userid" />
      <Route component={ProfileEditPage} path="/account/edits" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/:username/:postId" />
    </>
  );
}

export default App;
