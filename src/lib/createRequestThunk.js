import { finishLoading, startLoading } from '../modules/loading';

export default function createRequestThunk(type, request) {
  // 1. 성공 및 실패 액션 타입 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  // 2. thunk 함수를 생성 => thunk 함수 내부는 시작, 성공, 실패 했을 때 다른 액션을 dispatch 한다!
  return (...args) =>
    async (dispatch) => {
      dispatch({ type }); //요청 시작
      //dispatch(startLoading(type));
      try {
        const response = await request(...args);
        dispatch({
          type: SUCCESS,
          payload: response,
        }); // 요청 성공
        //dispatch(finishLoading(type));
      } catch (error) {
        dispatch({
          type: FAILURE,
          payload: error,
          error: true,
        }); // 요청 실패 => 에러 발생
        //dispatch(startLoading(type));
        throw error;
      }
    };
}

// 사용법: createRequestThunk('GET_USER', api.getUser)
