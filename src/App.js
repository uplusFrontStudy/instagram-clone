import React, { useEffect } from 'react';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ProfilePage from './pages/ProfilePage';
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
      <Route path="/" exact>
        <PostListPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/:userid">
        <ProfilePage />
      </Route>
      <Route path="/write">
        <WritePage />
      </Route>
      <Route path="/:username/:postId">
        <PostPage />
      </Route>
    </>
  );
}

export default App;
