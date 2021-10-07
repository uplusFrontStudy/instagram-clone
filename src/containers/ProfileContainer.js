import { connect } from 'react-redux';
import Profile from '../components/profile/profile';

const ProfileContainer = ({ image, updateImage, deleteImage }) => {
  return (
    <Profile
      image={image}
      onUpdateImage={updateImage}
      onDeleteImage={deleteImage}
    />
  );
};

const mapStateProps = (state) => ({
  image: state.profile.image,
});

const mapDispatchToProps = (dispatch) => ({
  updateImage: () => {
    console.log('updateImage');
  },
  deleteImage: () => {
    console.log('deleteImage');
  },
});

export default connect(mapStateProps, mapDispatchToProps)(ProfileContainer);
