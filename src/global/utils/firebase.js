const {initializeApp} = require('firebase/app');
const {getStorage, ref, getStream, deleteObject, uploadBytes} = require('firebase/storage');
const appConstants = require('../constants/appConstants');

const firebase = initializeApp(appConstants.FIREBASE_CONFIG);
const storage = getStorage(firebase);

module.exports.putImage = (key, buffer, type) => {

    const imageRef = ref(storage, key)
    const metadata = {
        contentType: type,
    }
    return uploadBytes(imageRef, buffer, metadata);

};

module.exports.getImage = async (key) => {

    const imageRef = ref(storage, key)
    return getStream(imageRef);

};

module.exports.deleteImage = (key) => {

    const imageRef = ref(storage, key)
    return deleteObject(imageRef);
    
}