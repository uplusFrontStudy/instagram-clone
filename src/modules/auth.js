import { createAction, handleActions } from 'redux-actions';
import createRequestThunk from '../lib/createRequestThunk';
import produce from 'immer';
import * as authAPI from '../api/auth';

const CHANGE_FILED = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

const FETCH_USER = 'auth/FETCH';
const FETCH_USER_SUCCESS = 'auth/FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'auth/FETCH_USER_FAILURE';

// 로그인
export const login = createRequestThunk(LOGIN, authAPI.login);
// 회원가입
export const register = createRequestThunk(REGISTER, authAPI.register);
// 로그아웃
export const logout = createRequestThunk(LOGOUT, authAPI.logout);


// 초기상태값
const initialState = {
  login: {
    emailAddress: '',
    password: '',
    authError: null,
  },
  register: {
    username: '',
    password: '',
    emailAddress:'',
    fullName:'',
    authError: null,
  },
};

// 액션 생성함수
export const changeField = ({ form, key, value })  => ({
  type : CHANGE_FILED,
  payload : {
    form,
    key,
    value
  }
});
export const initializeForm = (form) => ({
  type : INITIALIZE_FORM,
  payload : {
    form
  }
});

// const loginRequestAction = createAction(LOGIN);
// const loginSuccessAction = createAction(
//   LOGIN_SUCCESS,
//   ({ email, password }) => ({
//     email: auth.email,
//     password: auth.password,
//   }),
// );
// const loginErrorAction = createAction(LOGIN_FAILURE, ({ code, name }) => ({
//   errorCode: code,
//   errorName: name,
// }));

const registerRequestAction = createAction(REGISTER);
const registerSuccessAction = createAction(REGISTER_SUCCESS, ({ auth }) => ({
  auth,
}));
const registerErrorAction = createAction(REGISTER_FAILURE, ({ error }) => ({
  error,
}));

const logoutRequestAction = createAction(LOGOUT);
const logoutSuccessAction = createAction(LOGOUT_SUCCESS, ({}) => ({}));
const logoutErrorAction = createAction(LOGOUT_FAILURE, (error) => ({
  error,
}));

const fetchUserRequestAction = createAction(FETCH_USER);
const fetchUserSuccessAction = createAction(FETCH_USER_SUCCESS, ({}) => ({}));
const fetchUserErrorAction = createAction(FETCH_USER_FAILURE, ({ error }) => ({
  error,
}));

// 로그인
/* export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequestAction());
  try {
    const response = await authAPI.login(email, password);
    localStorage.setItem('userInfo', JSON.stringify(response.user));
    dispatch(loginSuccessAction({ email, password }));
  } catch (error) {
    console.dir(error);
    dispatch(loginErrorAction(error));
    throw error;
  }
}; */

// 로그아웃
/* export const logout = () => async (dispatch) => {
  dispatch(logoutRequestAction());
  try {
    await authAPI.logout();
    dispatch(logoutSuccessAction());
  } catch (error) {
    dispatch(logoutErrorAction(error));
    throw error;
  }
}; */

// 회원가입
/* export const register = (email, password) => async (dispatch) => {
  dispatch(registerRequestAction());
  try {
    await authAPI.register(email, password);
    dispatch(registerSuccessAction({ email, password }));
  } catch (error) {
    dispatch(registerErrorAction(error));
    throw error;
  }
}; */

// 회원상태 패치
/* export const fetchUser = () => async (dispatch) => {
  dispatch(fetchUserRequestAction());
  try {
    await authAPI.fetchUser();
    fetchUserSuccessAction();
  } catch (error) {
    dispatch(fetchUserErrorAction(error));
    throw error;
  }
}; */

// 리듀서 생성
export default function auth(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILED:
      return {
        ...state,
        [action.payload.form]: {
          ...state.[action.payload.form],
          [action.payload.key]: action.payload.value,
        },
      };
    case INITIALIZE_FORM:
      return {
        ...state,
        [action.payload.form] : initialState[action.payload.form]
      };
    case LOGIN:
      return {
        ...state
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth : action.payload.auth
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload.error
      };
    case REGISTER:
      return {
        ...state
      };
    case REGISTER_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        authError: action.payload.error
      }
    case REGISTER_FAILURE:
      console.log(action.payload);
      return {
        ...state
      };
    default:
      return state;
  }
}

/* const auth = handleActions(
  {
    // 입력필드 변경
    [CHANGE_FILED]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    // 폼 초기화
    [INITIALIZE_FORM]: (state, { payload: { form } }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    // 로그인 요청
    [LOGIN]: (state) => ({
      ...state,
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: false,
      auth,
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: { code, name } }) => ({
      ...state,
      authError: true,
    }),
    // 회원가입 요청
    [REGISTER]: (state) => ({
      ...state,
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: { auth } }) => ({
      ...state,
      authError: null,
      auth,
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: { error } }) => ({
      ...state,
      authError: error,
    }),
    // 로그아웃 요청
    [LOGOUT]: (state, { payload: {} }) => ({
      ...state,
    }),
    // 로그아웃 성공
    [LOGOUT_SUCCESS]: (state, { payload: {} }) => ({
      ...state,
    }),
    // 로그아웃 실패
    [LOGOUT_FAILURE]: (state, { payload: {} }) => ({
      ...state,
    }),
  },
  initialState,
); */
