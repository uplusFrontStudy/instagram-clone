import React from 'react';
import ProfileContainer from '../containers/profile/ProfileContainer';
import PostListContainer from '../containers/PostListContainer';
import Header from '../components/common/Header';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { userid } = useParams();

  return (
    <>
      <Header />
      <ProfileContainer userId={userid} />
      <PostListContainer />
    </>
  );
}

export default ProfilePage;
