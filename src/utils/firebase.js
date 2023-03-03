const firebase = require('firebase/app');
const { getStorage, uploadBytes, ref,getDownloadURL } = require('firebase/storage');

const config = require('../../config').api.firebase

const firebaseApp = firebase.initializeApp(config);

const storage =getStorage(firebaseApp);


export const addToFirebaseMoviesVideo =async(file)=>{
    const movieRef = ref(storage,`movieVideos/${Date.now()}-${file.originalname}`);
    await uploadBytes(movieRef,file.buffer)
    const movieUrl = await getDownloadURL(movieRef);
    return movieUrl;
}
export const addToFirebaseMovieCover =async(file,name,season)=>{
    const movieRef = ref(storage,`Serie/${name}/${season}/${Date.now()}-${file.originalname}`);
    await uploadBytes(movieRef,file.buffer)
    const movieUrl = await getDownloadURL(movieRef);
    return movieUrl;
}

module.exports =storage;