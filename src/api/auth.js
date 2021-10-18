import { firebaseAuth, firestore } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const myAuth = firebaseAuth.getAuth();
const { getFirestore, getDocs, collection, query, where, addDoc, doc } =
  firestore;

// 로그인
export const login = async ({ emailAddress, password }) => {
  // promise 반환
  const response = await signInWithEmailAndPassword(
    myAuth,
    emailAddress,
    password,
  );
  localStorage.setItem('userInfo', JSON.stringify(response.user));
  return response;
};

// 로그아웃
export const logout = async () => {
  const response = await signOut(myAuth);
  return response;
};

// 회원가입
export const register = async ({
  username,
  password,
  emailAddress,
  fullName,
}) => {
  const response = await createUserWithEmailAndPassword(
    myAuth,
    emailAddress,
    password,
  );

  return response;
};

export const doesUsernameExist = async (username) => {
  const q = query(
    collection(getFirestore(), 'users'),
    where('username', '==', username.toLowerCase()),
  );
  const result = await getDocs(q);

  return result.docs.length > 0;
};

export const getUserByUsername = async (username) => {
  const q = query(
    collection(getFirestore(), 'users'),
    where('username', '==', username.toLowerCase()),
  );
  const result = await getDocs(q);

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
};

export const getUserByUserId = async (userId) => {
  const q = query(
    collection(getFirestore(), 'users'),
    where('userId', '==', userId),
  );
  const result = await getDocs(q);
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user;
};

// 회원 등록
export const addUser = async (data) => {
  return await addDoc(collection(getFirestore(), 'users'), data);
};

// 회원상태확인
export const fetchUser = async () => {
  return await onAuthStateChanged(myAuth, (currentUser) => {
    return currentUser;
  });
};
