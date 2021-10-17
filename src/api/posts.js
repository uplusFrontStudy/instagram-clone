import { firestore, firebaseStorage } from '../firebase';

const { getFirestore, getDocs, collection, addDoc } = firestore;
const { getStorage, ref, uploadBytesResumable, getDownloadURL } =
  firebaseStorage;

const uploader = (images) => {
  const imageUrl = [];

  Object.keys(images).forEach((name) => {
    let file = images[name];
    const storageRef = ref(getStorage(), `posts/ ${file.name}`);
    uploadBytesResumable(storageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          imageUrl.push(url);
        });
      })
      .catch((error) => {
        console.error('Upload failed', error);
      });
  });

  return imageUrl;
};

export async function writePost({ content, images }) {
  const imageUrl = uploader(images);

  try {
    await addDoc(collection(getFirestore(), 'posts'), {
      content: content,
      images: imageUrl,
      createAt: Date.now(),
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

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
