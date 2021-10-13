import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';

import { fetchUser } from './modules/auth';

function App() {
  useLayoutEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Route component={PostListPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ProfilePage} path="/profile" />
      <Route component={ProfileEditPage} path="/profile/edit" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/:username/:postId" />
    </>
  );
}

export default connect(null, { fetchUser })(App);
