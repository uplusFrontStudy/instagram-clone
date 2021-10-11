export const getProfileImage = (imageName) => {
  imageName = 'abc.jpeg';
  console.log(`imageName : ${imageName}`);

  return null; //storage.ref().child(imageName).getDownloadURL();
  //console.log(imageURL);
  //const url = axios.get(imageURL);
  //console.log(`getProfileImage: ${url}`);
};

export const getUser = (userId) => {};
