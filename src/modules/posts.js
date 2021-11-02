import * as PostsAPI from '../api/posts';
import createRequestThunk from '../lib/createRequestThunk';
//액션 타입
//컴포넌트에서 api요청 -> useState , useEffect로 데이터를 로딩하는거
//api요청할때는 요청의 결과,로딩 상태,에러를 관리
const LIST_POSTS = 'posts/LIST_POSTS';
const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS';
const LIST_POSTS_FAILURE = 'posts/LIST_POSTS_FAILURE';

//웹요청 비동기 작업할땐 thunk or saga 함수
/* export const listPosts = () => async (dispatch) => {
  dispatch({ type: LIST_POSTS });
  try {
    const response = await PostsAPI.listPosts();

    dispatch({
      type: LIST_POSTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: LIST_POSTS_FAILURE,
      payload: error,
      error: true,
    });
  }
}; */
export const listPosts = createRequestThunk(LIST_POSTS, PostsAPI.listPosts);

//초기상태
const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
};

//리듀서
export default function posts(state = initialState, action) {
  switch (action.type) {
    case LIST_POSTS:
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case LIST_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };

    case LIST_POSTS_FAILURE:
      return {
        ...state,
        posts: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
