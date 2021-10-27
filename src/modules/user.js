import * as authAPI from '../api/auth';
import createRequestThunk from '../lib/createRequestThunk';

const TEMP_SET_USER = 'user/TEMP_SET_USER';

const SET_USER = 'user/SET_USER';
const SET_USER_SUCCESS = 'user/SET_USER_SUCCESS';
const SET_USER_FAILURE = 'user/SET_USER_FAILURE';

const LOGOUT = 'auth/LOGOUT';

export const tempSetUser = (user) => {
  return {
    type: TEMP_SET_USER,
    payload: user,
  };
};

export const setUser = createRequestThunk(SET_USER, authAPI.getUserByUserUid);

// 로그아웃
export const logout = () => async (dispatch) => {
  try {
    await authAPI.logout();
    localStorage.removeItem('authUser');
    dispatch({ type: LOGOUT });
  } catch (e) {
    console.log(e);
  }
};

const initialState = {
  user: null,
  userError: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case TEMP_SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userError: null,
      };
    case SET_USER_FAILURE:
      return {
        ...state,
        user: null,
        checkError: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
