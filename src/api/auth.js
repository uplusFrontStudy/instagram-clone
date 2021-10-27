import { firebaseAuth, firestore } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const myAuth = firebaseAuth.getAuth();
const { getFirestore, getDocs, collection, query, where, addDoc } = firestore;

// 로그인
export const login = async ({ emailAddress, password }) => {
  try {
    const response = await signInWithEmailAndPassword(
      myAuth,
      emailAddress,
      password,
    );
    return response;
  } catch (e) {
    console.error('Error adding document: ', e);
    let errorMessage = '';
    switch (e.code) {
      case 'auth/wrong-password':
        errorMessage = '비밀번호 오류';
        break;
      case 'auth/user-not-found':
        errorMessage = '잘못된 정보';
        break;
      default:
        errorMessage = e.code;
        break;
    }

    throw errorMessage;
  }
};

// 로그아웃
export const logout = async () => {
  const response = await signOut(myAuth);
  return response;
};

//회원가입시 로그인 존재 여부
export const doesUserIdExist = async (userId) => {
  const q = query(
    collection(getFirestore(), 'users'),
    where('userId', '==', userId.toLowerCase()),
  );
  const result = await getDocs(q);
  return result.docs.length > 0;
};

// 회원가입 및 users 등록
export const register = async ({
  userId,
  password,
  emailAddress,
  userName,
}) => {
  try {
    const createdUserResult = await createUserWithEmailAndPassword(
      myAuth,
      emailAddress,
      password,
    );

    const response = await addDoc(collection(getFirestore(), 'users'), {
      uid: createdUserResult.user.uid,
      userId: userId.toLowerCase(),
      userName,
      emailAddress: emailAddress.toLowerCase(),
      following: [],
      followers: [],
      dateCreated: Date.now(),
    });

    return response;
  } catch (e) {
    console.error('Error register document: ', e);
  }
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

export const getUserByUserUid = async (userUid) => {
  const q = query(
    collection(getFirestore(), 'users'),
    where('uid', '==', userUid),
  );
  const result = await getDocs(q);
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
};
