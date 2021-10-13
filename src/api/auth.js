import { firebaseAuth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const myAuth = firebaseAuth.getAuth();

// 로그인
export const login = async ({ email, password }) => {
  // promise 반환
  const response = await signInWithEmailAndPassword(myAuth, email, password);
  localStorage.setItem('userInfo', JSON.stringify(response.user));
  return response;
};

// 로그아웃
export const logout = async () => {
  const response = await signOut(myAuth);
  return response;
};
// 회원가입
export const register = async ({ email, password }) => {
  const response = await createUserWithEmailAndPassword(
    myAuth,
    email,
    password,
  );
  return response;
};

// 회원상태확인
export const fetchUser = async () => {
  return await onAuthStateChanged(myAuth, (currentUser) => {
    return currentUser;
  });
};
