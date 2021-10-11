import { useEffect } from 'react';
import { connect } from 'react-redux';
import Profile from '../components/profile/Profile';
import { getProfileImage } from '../modules/profile';

const ProfileContainer = ({
  getProfileImage,
  loadingProfileImage,
  profileImage,
}) => {
  useEffect(() => {
    getProfileImage();
  }, [getProfileImage]);

  return (
    <Profile
      loadingProfileImage={loadingProfileImage}
      profileImage={profileImage}
    />
  );
};

export default connect(
  ({ profile }) => ({
    loadingProfileImage: profile.loadingProfileImage,
    profileImage: profile.profileImage,
  }),
  {
    getProfileImage,
  },
)(ProfileContainer);
