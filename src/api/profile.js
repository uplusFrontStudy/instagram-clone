import { firebaseStorage, firestore } from '../firebase';

const { getFirestore, doc, collection, getDocs, updateDoc, query, where } =
  firestore;
const { getStorage, ref, getDownloadURL, uploadBytesResumable, deleteObject } =
  firebaseStorage;

export async function getUserByUserId(userId) {
  const result = await getDocsByQuery('userId', '==', userId, 'data');
  return result[0];
}

export async function getUserByUserUid(uid) {
  const result = await getDocsByQuery('uid', '==', uid, 'data');
  return result[0];
}

export async function updateProfile(user) {
  const userDoc = await getDocsByQuery('uid', '==', user.uid, 'id');
  const userRef = doc(getFirestore(), 'users', userDoc[0]);
  await updateDoc(userRef, user);
  return user;
}

export async function updateProfileImage({ type, user, file }) {
  console.log('api', type, user, file);
  const storage = getStorage();

  let profileURL = null;
  let profileName = null;

  if (type === 'upload') {
    const storageRef = ref(storage, `profile/${user.uid}/${file.name}`);
    await uploadBytesResumable(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    profileURL = downloadURL;
    profileName = file.name;
  } else if (type === 'delete') {
    const storageRef = ref(storage, `profile/${user.uid}/${user.profileName}`);
    await deleteObject(storageRef);
  }

  const updateUser = {
    ...user,
    profileURL,
    profileName,
  };

  const userDoc = await getDocsByQuery('uid', '==', user.uid, 'id');
  const userRef = doc(getFirestore(), 'users', userDoc[0]);
  await updateDoc(userRef, updateUser);

  return updateUser;
}

export async function getFollowUsersData(userList) {
  if (!userList || userList.length === 0) return [];
  const userDocs = await getDocsByQuery('userId', 'in', userList, 'data');
  return userDocs;
}

async function getDocsByQuery(column, sign, value, returnType) {
  const res = [];

  const q = query(
    collection(getFirestore(), 'users'),
    where(column, sign, value),
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    if (returnType === 'id') {
      res.push(doc.id);
    } else if (returnType === 'data') {
      res.push(doc.data());
    } else {
      res.push(doc);
    }
  });

  return res;
}
