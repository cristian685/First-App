import {getDownloadURL, getStorage, ref} from "firebase/storage";

export const getImage= (folderId, id, callback) => {
    return async () => {
        const storage = getStorage();
        getDownloadURL(ref(storage, `images/${folderId}/${id}`))
            .then((url) => {
                    callback(url)
            })
            .catch((error) => {
                // Handle any errors
            });
    }
}