import { firestore, storage } from '../firebase';

const { doc, getDoc, getFirestore, updateDoc } = firestore;
const { getStorage, ref, getDownloadURL, uploadBytesResumable, deleteObject } =
  storage;

export async function getUser(userId) {
  let res = null;
  const docRef = doc(getFirestore(), 'users', userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) res = docSnap.data();
  return res;
}

export async function updateUser(user) {
  const docRef = doc(getFirestore(), 'users', user.userId);
  await updateDoc(docRef, user);
  return user;
}

export async function uploadImage(file, user) {
  let res = null;
  // image upload
  const storage = getStorage();
  const storageRef = ref(storage, `profile/${user.userId}/${file.name}`);

  // get imageURL
  await uploadBytesResumable(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  res = { profileURL: downloadURL, profileName: file.name };

  //update user profileImageURL, file name
  const docRef = doc(getFirestore(), 'users', user.userId);
  await updateDoc(docRef, res);

  return res;
}

export async function deleteImage(user) {
  const storage = getStorage();
  const storageRef = ref(storage, `profile/${user.userId}/${user.profileName}`);
  await deleteObject(storageRef);

  //update user profileImageURL, file name
  const docRef = doc(getFirestore(), 'users', user.userId);
  await updateDoc(docRef, { profileURL: null, profileName: null });
}
