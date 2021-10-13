import React from 'react';
import ProfileContainer from '../containers/ProfileContainer';
import PostListContainer from '../containers/PostListContainer';

function ProfilePage({ FileInput }) {
  return (
    <>
      <ProfileContainer />
      <PostListContainer />
    </>
  );
}

export default ProfilePage;
