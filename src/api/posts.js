import { firestore } from '../firebase';
const { getFirestore, getDocs, collection } = firestore;

export async function listPosts() {
  const response = [];

  await getDocs(collection(getFirestore(), 'posts')).then((docs) => {
    docs.forEach((doc) => {
      response.push(doc.data());
    });
  });

  return response;
}
