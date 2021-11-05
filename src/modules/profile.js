import * as api from '../api/profile';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입 선언
// currentUser GET, UPDATE
const GET_USER = 'profile/GET_USER';
const GET_USER_SUCCESS = 'profile/GET_USER_SUCCESS';

const GET_USERS = 'profile/GET_USERS';
const GET_USERS_SUCCESS = 'profile/GET_USERS_SUCCESS';

const UPDATE_USER = 'profile/UPDATE_USER';
const UPDATE_USER_SUCCESS = 'profile/UPDATE_USER_SUCCESS';

const UPDATE_IMAGE = 'profile/UPDATE_IMAGE';
const UPDATE_IMAGE_SUCCESS = 'profile/UPDATE_IMAGE_SUCCESS';

const GET_FOLLOW_USERS_DATA = 'profile/GET_FOLLOW_USERS_DATA';
const GET_FOLLOW_USERS_DATA_SUCCESS = 'profile/GET_FOLLOW_USERS_DATA_SUCCESS';

// loginUser GET, UPDATE
const GET_LOGIN_USER = 'profile/GET_LOGIN_USER';
const GET_LOGIN_USER_SUCCESS = 'profile/GET_LOGIN_USER_SUCCESS';

const UPDATE_LOGIN_USER = 'profile/UPDATE_LOGIN_USER';
const UPDATE_LOGIN_USER_SUCCESS = 'profile/UPDATE_LOGIN_USER_SUCCESS';

// thunk 함수 생성 => 함수 내부에서 시작, 성공, 실패 했을 때 다른 액션을 디스패치 함
export const getUser = createRequestThunk(GET_USER, api.getUserByUserId);
export const getUsers = createRequestThunk(GET_USERS, api.getUsersByUserId);
export const updateUser = createRequestThunk(UPDATE_USER, api.updateProfile);
export const getFollowUsers = createRequestThunk(
  GET_FOLLOW_USERS_DATA,
  api.getFollowUsersData,
);
export const getLoginUser = createRequestThunk(
  GET_LOGIN_USER,
  api.getUserByUserUid,
);
export const updateLoginUser = createRequestThunk(
  UPDATE_LOGIN_USER,
  api.updateProfile,
);
export const updateImage = createRequestThunk(
  UPDATE_IMAGE,
  api.updateProfileImage,
);

// 초기 상태 선언, 로딩 상태는 loading 이라는 객체에서 관리함
const initalState = {
  user: null,
  error: null,
  loginUser: null,
  followUsers: null,
  users: null,
};

// 리듀서 생성
export default function profile(state = initalState, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_IMAGE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profileURL: action.payload.profileURL,
          profileName: action.payload.profileName,
        },
      };
    case GET_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
      };

    case UPDATE_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUser: action.payload,
      };
    case GET_FOLLOW_USERS_DATA_SUCCESS:
      return {
        ...state,
        followUsers: action.payload,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
}
