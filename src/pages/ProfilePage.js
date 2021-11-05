import React from 'react';
import ProfileContainer from '../containers/profile/ProfileContainer';
import PostListContainer from '../containers/post/PostListContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { useParams } from 'react-router-dom';
import PostModalContainer from '../containers/post/PostModalContainer';

function ProfilePage() {
  const { userid } = useParams();

  return (
    <>
      <HeaderContainer />
      <ProfileContainer userId={userid} />
      <PostListContainer userId={userid} />
      <PostModalContainer />
    </>
  );
}

export default ProfilePage;
