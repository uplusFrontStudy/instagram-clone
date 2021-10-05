import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

//firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();

//firebase의 firestore 인스턴스를 변수에 저장
export const { firestore } = firebase.firestore();
