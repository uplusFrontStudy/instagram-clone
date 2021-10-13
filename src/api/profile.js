import { firestore } from '../firebase';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage';
const { getFirestore, getDocs, collection, query, where } = firestore;
const storage = getStorage();

export async function getUserData(userId) {
  let response = {};
  const q = query(
    collection(getFirestore(), 'users'),
    where('userId', '==', userId),
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    response = doc.data();
  });
  return response;
}

export async function getProfileImage(userId) {
  const pathReference = ref(storage, `profile/${userId}.jpeg`);
  return await getDownloadURL(pathReference);
}

export async function uploadProfileImage(file, userId) {
  const storageRef = ref(storage, `profile/idid.jpeg`);

  // 'file' comes from the Blob or File API
  return await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!', file);
  });

  /*
  console.log(file);
  const storage = getStorage();
  const storageRef = ref(storage, 'profile/test.jpeg');

  const metadata = {
    contentType: 'image/jpeg',
  };

  return await storageRef.put(file).then(function (snapshot) {
    console.log('Uploaded a blob or file!');
  });
  */

  /*
  const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(()=>{
            console.log("upload");
            // 이미지 바꾸기.......ㅜㅜ
        });
  
  */
}
