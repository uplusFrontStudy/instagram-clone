import * as PostsAPI from '../api/posts';
import createRequestThunk from '../lib/createRequestThunk';
//액션 타입
//컴포넌트에서 api요청 -> useState , useEffect로 데이터를 로딩하는거
//api요청할때는 요청의 결과,로딩 상태,에러를 관리
const LIST_POSTS = 'posts/LIST_POSTS';
const LIST_POSTS_SUCCESS = 'posts/LIST_POSTS_SUCCESS';
const LIST_POSTS_FAILURE = 'posts/LIST_POSTS_FAILURE';

const GET_FOLLOW_POSTS = 'posts/GET_FOLLOW_POSTS';
const GET_FOLLOW_POSTS_SUCCESS = 'posts/GET_FOLLOW_POSTS_SUCCESS';
const GET_FOLLOW_POSTS_FAILURE = 'posts/GET_FOLLOW_POSTS_FAILURE';

export const listPosts = createRequestThunk(LIST_POSTS, PostsAPI.listPosts);
export const getFollowPosts = createRequestThunk(
  GET_FOLLOW_POSTS,
  PostsAPI.getFollowPosts,
);

//초기상태
const initialState = {
  posts: null,
  error: null,
};

//리듀서
export default function posts(state = initialState, action) {
  switch (action.type) {
    case LIST_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };

    case LIST_POSTS_FAILURE:
      return {
        ...state,
        posts: null,
        error: action.payload,
      };
    case GET_FOLLOW_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };
    case GET_FOLLOW_POSTS_FAILURE:
      return {
        ...state,
        posts: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
