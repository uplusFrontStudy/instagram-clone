import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { firebaseAuth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import * as AuthAPI from '../api/auth';
const myAuth = firebaseAuth.getAuth();

const CHANGE_FILED = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
// const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
// const SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST';
const SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

const FETCH_USER_SUCCESS = 'auth/FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'auth/FETCH_USER_FAILURE';

const initialState = {
  login: {
    email: '',
    password: '',
  },
  register: {
    email: '',
    password: '',
  },
};

/* const actionCreators = {
  login: (email, password) => ({
    type: LOGIN_REQUEST,
    email,
    password,
  }),
  logout: () => ({ type: LOGOUT }),
  signup: (email, password) => ({
    type: SIGNUP_REQUEST,
    email,
    password,
  }),
}; */

export const changeField = createAction(
  CHANGE_FILED,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const initializeForm = createAction(INITIALIZE_FORM, ({ form }) => ({
  form,
}));

// export const login = createAction(LOGIN_REQUEST, ({ email, password }) => ({
//   email,
//   password,
// }));

// export const login = (email, password) => (dispatch) => {
//   return AuthService.login(email, password).then(
//     (data) => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: { user: data },
//       });

//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       dispatch({
//         type: LOGIN_FAIL,
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: message,
//       });

//       return Promise.reject();
//     },
//   );
// };

const loginSuccessAction = createAction(LOGIN_SUCCESS, ({ auth }) => ({
  auth,
}));

const loginErrorAction = createAction(LOGIN_FAILURE, ({ error }) => ({
  error,
}));

const registerSuccessAction = createAction(SIGNUP_SUCCESS, ({ auth }) => ({
  auth,
}));

const registerErrorAction = createAction(SIGNUP_FAILURE, ({ error }) => ({
  error,
}));

const logoutSuccessAction = createAction(LOGOUT_SUCCESS, ({}) => ({}));
const logoutErrorAction = createAction(LOGOUT_FAILURE, ({ error }) => ({
  error,
}));

const fetchUserSuccessAction = createAction(FETCH_USER_SUCCESS, ({}) => ({}));
const fetchUserErrorAction = createAction(FETCH_USER_FAILURE, ({ error }) => ({
  error,
}));

// 로그인
export const login = (email, password) => async (dispatch) => {
  try {
    const user = AuthAPI.login(email, password);
    console.log(user);
    dispatch(loginSuccessAction({ email, password }));
  } catch (error) {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    dispatch(loginErrorAction(error));
    throw error;
  }
};

// 로그아웃
export const logout = () => async (dispatch) => {
  try {
    await signOut(myAuth);
    dispatch(logoutSuccessAction());
  } catch (error) {
    dispatch(logoutErrorAction(error));
    throw error;
  }
};

// 회원가입
export const register = (email, password) => async (dispatch) => {
  try {
    await createUserWithEmailAndPassword(myAuth, email, password);
    dispatch(registerSuccessAction({ email, password }));
  } catch (error) {
    dispatch(registerErrorAction(error));
    throw error;
  }
};

// 회원상태 패치
export const fetchUser = () => async (dispatch) => {
  try {
    console.log(myAuth);
    await onAuthStateChanged(myAuth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        localStorage.setItem('isAuthenticated', true);
      } else {
        localStorage.removeItem('isAuthenticated');
      }
    });
  } catch (error) {
    dispatch(fetchUserErrorAction(error));
    throw error;
  }
};

/* const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, user: action.user };
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}; */

const auth = handleActions(
  {
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    //  로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 성공
    [SIGNUP_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      authError: error,
    }),
    // 회원가입 실패
    [SIGNUP_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      authError: error,
    }),
    // 로그아웃 성공
    [LOGOUT_SUCCESS]: (state, { payload: {} }) => ({
      ...state,
    }),
    // 로그아웃 실패
  },
  initialState,
);

export default auth;
