import {collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import {database} from "../config/firebaseConfig";
import {getStorage, ref, uploadBytes} from "firebase/storage";

const productCollectionRef = collection(database,"terenuri");
const productReservationRef = collection(database,"intervalRezervare");

export const fetchProductsService = async () => {
    return await getDocs(productCollectionRef).then(response => {
        return response.docs.map(doc => {
            return {...doc.data() , id: doc.id}
        })
    }).catch(error => console.log(error));

}
export const addProductService = async (product) => {
    return await addDoc(productCollectionRef , product).then(response => {
        console.log('response',response,'id',response?.id)
        if (response.id) {
            return response.id;
        } else {
            return '';
        }

    }).catch(error =>console.log(error));
}

export const deleteProductService = async (id) => {
    const elementDoc = doc(database , "terenuri" , id);
    await deleteDoc(elementDoc)
}

export const uploadImagesFirebase = async (image , idDoc) => {
    console.log(image)
    const storage = getStorage();
    const storageRef = ref(storage, `/images/${idDoc}`);
    const metadata = {
        contentType: image.type,
    };
    const files = uploadBytes(storageRef, image ,metadata).then((snapshot) => {
        console.log('Uploaded an array!');
    }).catch(error => console.log(error))
    console.log(files)
}

export const deleteImageService = async (image , id) => {
    const elementDoc = doc(database , "terenuri" , id);
    await deleteDoc(elementDoc)
}


export const fetchReservationService = async () => {
    return await getDocs(productReservationRef).then(response => {
        return response.docs.map(doc => {
            return {...doc.data() , id: doc.id}
        })
    }).catch(error => console.log(error));

}

export const addReservationService = async (reservation) => {
    return await addDoc(productReservationRef , reservation).then(response => {
        if (response.id) {
            return response.id;
        } else {
            return '';
        }

    }).catch(error =>console.log(error));
}
