import {collection, getDocs, addDoc, doc, deleteDoc ,updateDoc, where ,query ,setDoc } from "firebase/firestore";
import {database} from "../config/firebaseConfig";
import {getStorage, ref, uploadBytes,deleteObject,list } from "firebase/storage";
import firebase from "firebase/compat";




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

export const deleteReservationService = async (id) => {
    const reservationDoc = doc(database , "intervalRezervare" , id);
    await deleteDoc(reservationDoc)
}

export const deleteIdOfImage = async (id) => {
    debugger;
    const elementDoc = doc(database , 'terenuri' ,id);
    await updateDoc(elementDoc, {
        imageIds: firebase.firestore.FieldValue.delete()
    }).then(function () {
        console.log( " is deleted");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

export const uploadImagesFirebase = async (image , idDoc) => {
    debugger;
    const storage = getStorage();
    const storageRef = ref(storage, `/images/${idDoc}/${image?.id}`);
    debugger;
    const metadata = {
        contentType: image.type,
    };
    const files = uploadBytes(storageRef, image?.file ,metadata).then((snapshot) => {
        console.log('Uploaded an array!');
    }).catch(error => console.log(error))
}

export const deleteImageService = async ( idDoc ) => {
    const storage = getStorage();
    const desertRef = ref(storage, `images/${idDoc}`);
    deleteObject (desertRef).then(() => {
    }).catch(error => console.log(error))
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
export const updateProductFbService = async (id ,product) => {
   const refProduct = doc(database, "terenuri", id);
    await updateDoc(refProduct , product)
}
export const updateDetailsFbService = async (id ,details) => {
    await updateDoc(doc(database, "terenuri", id), {
        details
    });
    debugger;
}

export const updateImageIdsFbService = async (id ,imageIds) => {
    await updateDoc(doc(database, "terenuri", id), {
        imageIds
    });
}


export const fetchReservationsById = async (idTeren) => {
    const q = query(productReservationRef, where("idTeren", "==", idTeren));
            return await getDocs(q).then(response => {
                const responseDoc = response.docs;
                return responseDoc.map(doc => {
                    return {...doc.data() , id: doc.id}

                })
            }).catch(error => console.log(error));
}
export const fetchReservationsByUser = async (userid) => {
    const q = query(productReservationRef, where("userid", "==", userid));
    return await getDocs(q).then(response => {
        const responseDoc = response.docs;
        return responseDoc.map(doc => {
            return {...doc.data() , id: doc.id}

        })
    }).catch(error => console.log(error));
}

export const updateReservationFbService = async (id ,reservation) => {
    const refReservation = doc(database, "intervalRezervare", id);
    await updateDoc(refReservation , reservation)
}