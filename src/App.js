import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import history from './history';
function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route component={PostListPage} path={['/:username']} exact />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={ProfilePage} path="/" exact />
        <Route component={ProfileEditPage} path="/profile/edit" />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/:username/:postId" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
