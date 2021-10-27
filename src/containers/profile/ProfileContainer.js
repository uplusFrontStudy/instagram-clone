import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../../components/profile/Profile';
import { getLoginUser, getUser } from '../../modules/profile';
import FollowActionButtonContainer from './FollowActionButtonContainer';

function ProfileContainer({ userId }) {
  // 처음 마운트될 때 사용자 정보 읽기 API 요청
  const dispatch = useDispatch();
  const { user, loginUser, error, loading } = useSelector(
    ({ profile, loading }) => ({
      user: profile.user,
      loginUser: profile.loginUser,
      error: profile.error,
      loading: loading['profile/GET_USER'],
    }),
  );

  useEffect(() => {
    dispatch(getUser(userId));
    dispatch(getLoginUser('amy92'));
  }, [dispatch, userId]);

  return (
    <>
      <Profile
        user={user}
        loginUser={loginUser}
        loading={loading}
        error={error}
        followActionButton={
          <FollowActionButtonContainer
            user={user}
            visibleProfileEditButton={true}
          />
        }
      />
    </>
  );
}

export default ProfileContainer;
