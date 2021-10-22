import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoginUser,
  getUser,
  updateLoginUser,
  updateUser,
} from '../../modules/profile';
import Profile from '../../components/profile/Profile';

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

  //console.log()
  useEffect(() => {
    console.log('effect!');
    dispatch(getUser(userId));
    dispatch(getLoginUser('amy92'));
  }, [dispatch, userId]);

  const editUser = useCallback(
    (user) => dispatch(updateUser(user)),
    [dispatch],
  );

  const editLoginUser = useCallback(
    (loginUser) => dispatch(updateLoginUser(loginUser)),
    [dispatch],
  );

  return (
    <>
      <Profile
        user={user}
        loginUser={loginUser}
        editUser={editUser}
        editLoginUser={editLoginUser}
        loading={loading}
        error={error}
      />
    </>
  );
}

export default ProfileContainer;
