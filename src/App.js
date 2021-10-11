import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

import { fetchUser } from './modules/auth';
import Header from './components/common/Header';

function App({ fetchUser }) {
  useLayoutEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <Route component={PostListPage} path={['/:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ProfilePage} path="/profile" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/:username/:postId" />
    </>
  );
}

export default connect(null, { fetchUser })(App);
