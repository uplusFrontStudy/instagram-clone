import { combineReducers } from 'redux';
import posts from './posts';
import profile from './profile';
import auth from './auth';
import loading from './auth';
import write from './write';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
  posts,
  post,
  profile,
  auth,
  loading,
  write,
  user,
});

export default rootReducer;
