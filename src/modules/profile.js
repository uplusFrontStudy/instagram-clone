import { handleActions } from 'redux-actions';
import * as api from '../api/profile';

// 1. 액션 타입 정의
const GET_PROFILE_IMAGE = 'profile/GET_PROFILE_IMAGE';
const GET_PROFILE_IMAGE_SUCCESS = 'profile/GET_PROFILE_IMAGE_SUCCESS';
const GET_PROFILE_IMAGE_FAIL = 'profile/GET_PROFILE_IMAGE_FAIL';

// 2. thunk 함수를 생성한다.
//    👉 thunk 함수 내부는 시작, 성공, 실패 했을 때 다른 액션을 dispatch 한다!
export const getProfileImage = (id) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_IMAGE }); // 요청을 시작한 것을 알림
  try {
    const reponse = await api.getProfileImage();
    dispatch({
      type: GET_PROFILE_IMAGE_SUCCESS,
      payload: reponse,
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type: GET_PROFILE_IMAGE_FAIL,
      payload: e,
      error: true,
    }); // 에러 발생
    throw e; // 나중에 컴포넌트 단에서 에러를 조회할 수 있게 해 줌
  }
};

// 초기 state를 선언
const initalState = {
  loding: {
    GET_PROFILE_IMAGE: false,
  },
  profileImage: null,
};

const sample = handleActions(
  {
    [GET_PROFILE_IMAGE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_PROFILE_IMAGE: true, // 요청 시작
      },
    }),
    [GET_PROFILE_IMAGE_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_PROFILE_IMAGE: false, // 요청 완료
      },
      profileImage: action.payload,
    }),
    [GET_PROFILE_IMAGE_FAIL]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_PROFILE_IMAGE: false, // 요청 완료
      },
    }),
  },
  initalState,
);

export default sample;
