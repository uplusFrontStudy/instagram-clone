import { query } from '@firebase/firestore';
import { firestore, firebaseStorage } from '../firebase';

const { getFirestore, doc, getDoc, getDocs, collection, addDoc, where } =
  firestore;
const { getStorage, ref, uploadBytesResumable, getDownloadURL } =
  firebaseStorage;

export const uploader = async (images) => {
  const imageUrl = [];
  const storage = getStorage();

  for (const image of images) {
    let storageRef = ref(storage, `posts/${image.name}`);
    //파일 업로드
    await uploadBytesResumable(storageRef, image);
    //파일 다운로드 URL
    let downloadUrl = await getDownloadURL(storageRef);

    imageUrl.push(downloadUrl);
  }
  return imageUrl;
};

export const writePost = async ({ content, coverImage, postImages }) => {
  const coverImageUrl = await uploader(coverImage);
  const postImagesUrl = await uploader(postImages);

  try {
    return await addDoc(collection(getFirestore(), 'posts'), {
      content: content,
      coverImageUrl: coverImageUrl,
      postImagesUrl: postImagesUrl,
      createAt: Date.now(),
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const listPosts = async (userId) => {
  try {
    const q = query(
      collection(getFirestore(), 'posts'),
      where('userId', '==', userId.toLowerCase()),
    );

    const result = await getDocs(q);
    const response = result.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return response;
  } catch (e) {
    console.error('Error get document: ', e);
  }
};

export const readPost = async (docId) => {
  try {
    const docRef = doc(getFirestore(), 'posts', docId);
    const response = await getDoc(docRef);
    if (response.exists()) return response.data();
  } catch (e) {
    console.error('Error get document: ', e);
  }
};
