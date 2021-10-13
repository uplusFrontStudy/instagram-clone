import * as ProfileAPI from '../api/profile';
import createRequestThunk from '../lib/createRequestThunk';

const GET_USER_DATA = 'profile/GET_USER_DATA';
const GET_USER_DATA_SUCCESS = 'profile/GET_USER_DATA_SUCCESS';
const GET_USER_DATA_FAILURE = 'profile/GET_USER_DATA_FAILURE';

const UPDATE_USER_DATA = 'profile/UPDATE_USER_DATA';
const UPDATE_USER_DATA_SUCCESS = 'profile/UPDATE_USER_DATA_SUCCESS';
const UPDATE_USER_DATA_FAILURE = 'profile/UPDATE_USER_DATA_FAILURE';

const GET_PROFILE_IMAGE = 'profile/GET_PROFILE_IMAGE';
const GET_PROFILE_IMAGE_SUCCESS = 'profile/GET_PROFILE_IMAGE_SUCCESS';
const GET_PROFILE_IMAGE_FAILURE = 'profile/GET_PROFILE_IMAGE_FAILURE';

const UPLOAD_PROFILE_IMAGE = 'profile/UPLOAD_PROFILE_IMAGE';
const UPLOAD_PROFILE_IMAGE_SUCCESS = 'profile/UPLOAD_PROFILE_IMAGE_SUCCESS';
const UPLOAD_PROFILE_IMAGE_FAILURE = 'profile/UPLOAD_PROFILE_IMAGE_FAILURE';

export const getUserData = createRequestThunk(
  GET_USER_DATA,
  ProfileAPI.getUserData,
);

export const updateUserData = createRequestThunk(
  UPDATE_USER_DATA,
  ProfileAPI.getUserData,
);

export const getProfileImage = createRequestThunk(
  GET_PROFILE_IMAGE,
  ProfileAPI.getProfileImage,
);

export const uploadProfileImage = createRequestThunk(
  UPLOAD_PROFILE_IMAGE,
  ProfileAPI.uploadProfileImage,
);

const initalState = {
  loading: {
    GET_USER_DATA: false,
    UPDATE_USER_DATA: false,
    GET_PROFILE_IMAGE: false,
    UPLOAD_PROFILE_IMAGE: false,
  },
  user: [],
  profileImage: null,
};

// 리듀서 생성
export default function profile(state = initalState, action) {
  switch (action.type) {
    // 회원 정보 가져오기
    case GET_USER_DATA:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USER_DATA: true, // 요청 시작
        },
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USER_DATA: false, // 요청 완료
        },
        user: action.payload,
      };
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_USER_DATA: false, // 요청 실패
        },
      };

    // 회원 프로필 이미지 가져오기
    case GET_PROFILE_IMAGE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PROFILE_IMAGE: true, // 요청 시작
        },
      };
    case GET_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PROFILE_IMAGE: false, // 요청 완료
        },
        profileImage: action.payload,
      };
    case GET_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PROFILE_IMAGE: false, // 요청 실패
        },
      };

    case UPLOAD_PROFILE_IMAGE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PROFILE_IMAGE: true, // 요청 시작
        },
      };
    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PROFILE_IMAGE: false, // 요청 완료
        },
        profileImage: action.payload,
      };
    case UPLOAD_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PROFILE_IMAGE: false, // 요청 실패
        },
      };
    default:
      return state;
  }
}
