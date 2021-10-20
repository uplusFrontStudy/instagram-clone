import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../modules/profile';
import Profile from '../../components/profile/Profile';

function ProfileContainer({ userId }) {
  // 처음 마운트될 때 사용자 정보 읽기 API 요청
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector(({ profile, loading }) => ({
    user: profile.user,
    error: profile.error,
    loading: loading['profile/GET_USER'],
  }));

  // 로그인유저 정보 가져오기 (임시로 넣어놓은 데이터)
  const loginUser = {
    userId: 'amy92',
    userName: '김미경11',
    password: 'passs',
    profileName: '스크린샷 2021-10-08 오후 4.24.24.png',
    profileURL:
      'https://firebasestorage.googleapis.com/v0/b/instagram-clone-cabbf.appspot.com/o/profile%2Famy92%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-10-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.24.24.png?alt=media&token=dc40be50-9e39-440b-b87a-03b24cf74d71',
    follow: ['U1', 'U2'],
    follower: ['U1'],
    posts: [],
  };

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  const followStatusUpdate = useCallback(
    (user) => dispatch(updateUser(user)),
    [dispatch],
  );

  return (
    <Profile
      user={user}
      loginUser={loginUser}
      followStatusUpdate={followStatusUpdate}
      loading={loading}
      error={error}
    />
  );
}

export default ProfileContainer;
