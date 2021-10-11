import { combineReducers } from 'redux';
import posts from './posts';
import profile from './profile';
import auth from './auth';

const rootReducer = combineReducers({
  posts,
  profile,
  auth
});

export default rootReducer;
