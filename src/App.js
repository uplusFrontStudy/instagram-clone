import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';

import { fetchUser } from './modules/auth';
import Header from './components/common/Header';

function App({ fetchUser }) {
  useLayoutEffect(() => {
    fetchUser();
  }, []);

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

export default connect(null, { fetchUser })(App);
