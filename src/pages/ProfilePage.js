import React from 'react';
import ProfileContainer from '../containers/profile/ProfileContainer';
import PostListContainer from '../containers/post/PostListContainer';
import HeaderContainer from '../containers/HeaderContainer';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { userid } = useParams();

  return (
    <>
      <HeaderContainer />
      <ProfileContainer userId={userid} />
      <PostListContainer />
    </>
  );
}

export default ProfilePage;
