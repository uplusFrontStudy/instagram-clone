import { firebaseAuth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const myAuth = firebaseAuth.getAuth();

// 로그인
export const login = async (email, password) => {
  // promise 반환
  const response = await signInWithEmailAndPassword(myAuth, email, password);
  return response;
};

// 로그아웃
export const logout = () => {};
// 회원가입
export const register = () => {};
