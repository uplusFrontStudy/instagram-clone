import { combineReducers } from 'redux';
import posts from './posts';
import profile from './profile';
import auth from './auth';
import loading from './auth';
import write from './write';
import user from './user';

const rootReducer = combineReducers({
  posts,
  profile,
  auth,
  loading,
  write,
  user,
});

export default rootReducer;
