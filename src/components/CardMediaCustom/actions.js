import {getDownloadURL, getStorage, ref} from "firebase/storage";
export const getImage= (id,callback) => {
    return async () => {
        const storage = getStorage();
        getDownloadURL(ref(storage, `images/${id}`))
            .then((url) => {
                    callback(url)
            })
            .catch((error) => {
                // Handle any errors
            });
    }

}