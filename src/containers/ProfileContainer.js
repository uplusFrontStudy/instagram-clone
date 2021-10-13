import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../components/profile/Profile';
import { getProfileImage, getUserData } from '../modules/profile';

function ProfileContainer() {
  // useSelector을 이용하면 connect 함수를 사용하지 않고도 리덕스 상태를 조회할 수 있다.
  const { profileImage, user } = useSelector((state) => state.profile);

  const userId = 'idid';
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData(userId));
    dispatch(getProfileImage(userId));
  }, [getUserData, getProfileImage]);

  return <Profile profileImage={profileImage} user={user} />;
}

export default ProfileContainer;
