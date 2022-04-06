import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const thePhoto = await uploadPhoto();
    const theUser = await createUser();

    return {
      photo: thePhoto,
      user: theUser,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
