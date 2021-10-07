import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import ProfileContainer from './containers/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={PostListPage} path={['/:username']} />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
        <Route component={ProfileContainer} path="/" exact />
        <Route component={WritePage} path="/write" />
        <Route component={PostPage} path="/:username/:postId" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
