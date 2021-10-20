import React from 'react';
import ProfileContainer from '../containers/profile/ProfileContainer';
import PostListContainer from '../containers/PostListContainer';

function ProfilePage({ match }) {
  const userId = match.params.userid;

  return (
    <>
      <ProfileContainer userId={userId} />
      <PostListContainer />
    </>
  );
}

export default ProfilePage;
