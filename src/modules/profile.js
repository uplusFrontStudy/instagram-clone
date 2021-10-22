import * as api from '../api/profile';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입 선언
const GET_USER = 'profile/GET_USER';
const GET_USER_SUCCESS = 'profile/GET_USER_SUCCESS';

const UPDATE_USER = 'profile/UPDATE_USER';
const UPDATE_USER_SUCCESS = 'profile/UPDATE_USER_SUCCESS';

const UPLOAD_IMAGE = 'profile/UPLOAD_IMAGE';
const UPLOAD_IMAGE_SUCCESS = 'profile/UPLOAD_IMAGE_SUCCESS';

const DELETE_IMAGE = 'profile/DELETE_IMAGE';
const DELETE_IMAGE_SUCCESS = 'profile/DELETE_IMAGE_SUCCESS';

const GET_LOGIN_USER = 'profile/GET_LOGIN_USER';
const GET_LOGIN_USER_SUCCESS = 'profile/GET_LOGIN_USER_SUCCESS';

const UPDATE_LOGIN_USER = 'profile/UPDATE_LOGIN_USER';
const UPDATE_LOGIN_USER_SUCCESS = 'profile/UPDATE_LOGIN_USER_SUCCESS';

// thunk 함수 생성 => 함수 내부에서 시작, 성공, 실패 했을 때 다른 액션을 디스패치 함
export const getUser = createRequestThunk(GET_USER, api.getUser);
export const updateUser = createRequestThunk(UPDATE_USER, api.updateUser);
export const uploadImage = createRequestThunk(UPLOAD_IMAGE, api.uploadImage);
export const deleteImage = createRequestThunk(DELETE_IMAGE, api.deleteImage);
export const getLoginUser = createRequestThunk(GET_LOGIN_USER, api.getUser);
export const updateLoginUser = createRequestThunk(
  UPDATE_LOGIN_USER,
  api.updateUser,
);

// 초기 상태 선언, 로딩 상태는 loading 이라는 객체에서 관리함
const initalState = {
  user: null,
  error: null,
  loginUser: null,
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
        user: {
          ...state.user,
          follower: action.payload.follower,
        },
      };

    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profileURL: action.payload.profileURL,
          profileName: action.payload.profileName,
        },
      };
    case DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          profileURL: null,
          profileName: null,
        },
      };
    case GET_LOGIN_USER_SUCCESS:
      console.log('result = ', {
        ...state,
        loginUser: action.payload,
      });
      return {
        ...state,
        loginUser: action.payload,
      };

    case UPDATE_LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          follow: action.payload.follow,
        },
      };
    default:
      return state;
  }
}
