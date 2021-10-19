import { firestore, firebaseStorage } from '../firebase';

const { getFirestore, getDocs, collection, addDoc } = firestore;
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

export async function listPosts() {
  const response = [];

  try {
    await getDocs(collection(getFirestore(), 'posts')).then((docs) => {
      docs.forEach((doc) => {
        const postsObj = {
          ...doc.data(),
          id: doc.id,
        };
        response.push(postsObj);
      });
    });
  } catch (e) {
    console.error('Error get document: ', e);
  }
  return response;
}
