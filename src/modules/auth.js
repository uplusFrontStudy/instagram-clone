import createRequestThunk from '../lib/createRequestThunk';
import * as authAPI from '../api/auth';

const CHANGE_FILED = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

// 로그인
export const login = createRequestThunk(LOGIN, authAPI.login);
// 회원가입
export const register = createRequestThunk(REGISTER, authAPI.register);

// 액션 생성함수
export const changeField = ({ form, key, value }) => ({
  type: CHANGE_FILED,
  payload: {
    form,
    key,
    value,
  },
});
export const initializeForm = (form) => ({
  type: INITIALIZE_FORM,
  payload: {
    form,
  },
});

// 초기상태값
const initialState = {
  register: {
    emailAddress: '',
    userId: '',
    userName: '',
    password: '',
  },
  login: {
    emailAddress: '',
    password: '',
  },
  auth: null,
  authError: null,
};

// 리듀서 생성
export default function auth(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILED:
      return {
        ...state,
        [action.payload.form]: {
          ...state[action.payload.form],
          [action.payload.key]: action.payload.value,
        },
      };
    case INITIALIZE_FORM:
      return {
        ...state,
        [action.payload.form]: initialState[action.payload.form],
      };
    case LOGIN:
      return {
        ...state,
        auth: null,
        authError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        authError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };
    case REGISTER:
      return {
        ...state,
        auth: null,
        authError: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        auth: action.payload,
        authError: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };

    default:
      return state;
  }
}
