import * as PostsAPI from '../api/posts';
import createRequestThunk from '../lib/createRequestThunk';

const READ_POST = 'post/READ_POST';
const READ_POST_SUCCESS = 'post/READ_POST_SUCCESS';
const READ_POST_FAILURE = 'post/READ_POST_FAILURE';
/* 
export const readPost = (docId) => async (dispatch) => {
  dispatch({ type: READ_POST });
  try {
    const response = await PostsAPI.readPost(docId);

    dispatch({
      type: READ_POST_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: READ_POST_FAILURE,
      paylod: error,
      error: true,
    });
  }
}; */

export const readPost = createRequestThunk(READ_POST, PostsAPI.readPost);

const initialState = {
  post: null,
  error: null,
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case READ_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
      };
    case READ_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
