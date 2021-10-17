import * as postsAPI from '../api/posts';

//액션 타입
const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FILED = 'write/CHANGE_FILED';
const WRITE_POST = 'write/WRITE_POST';
const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE';

//액션 생성 함수
export const initialize = () => ({ type: INITIALIZE });
export const changeField = ({ key, value }) => {
  /*  type: CHANGE_FILED,
  key,
  value, */
  return {
    type: CHANGE_FILED,
    key,
    value,
  };
};

//thunk 함수
export const writePost =
  ({ content, images }) =>
  async (dispach) => {
    dispach({ type: WRITE_POST });
    try {
      await postsAPI.writePost({ content, images });
      dispach({
        type: WRITE_POST_SUCCESS,
        payload: { content, images },
      });
    } catch (error) {
      dispach({
        type: WRITE_POST_FAILURE,
        payload: error,
        error: true,
      });
    }
  };

//초기값
const initialState = {
  coverImages: '',
  postImages: [],
  content: '',
  post: null,
  postError: null,
};

//리듀서
export default function write(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return {
        state: initialState,
      };
    case CHANGE_FILED:
      return {
        ...state,
        [action.key]: action.value,
      };
    case WRITE_POST:
      return {
        ...state,
        post: null,
        postError: null,
      };
    case WRITE_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case WRITE_POST_FAILURE:
      return {
        ...state,
        postError: action.payload,
      };
    default:
      return state;
  }
}
