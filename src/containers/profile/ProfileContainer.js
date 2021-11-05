import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../../components/profile/Profile';
import { getUser } from '../../modules/profile';

function ProfileContainer({ userId }) {
  // 처음 마운트될 때 사용자 정보 읽기 API 요청
  const dispatch = useDispatch();
  const { currentUser, loginUser, error, loading } = useSelector(
    ({ profile, loading }) => ({
      currentUser: profile.user,
      loginUser: profile.loginUser,
      error: profile.error,
      loading: loading['profile/GET_USER'],
    }),
  );

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Profile
        currentUser={currentUser}
        loginUser={loginUser}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default ProfileContainer;
