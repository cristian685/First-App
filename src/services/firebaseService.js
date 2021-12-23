import {collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import {database} from "../config/firebaseConfig";

const productCollectionRef = collection(database,"terenuri");

export const fetchProductsService = async () => {
    return await getDocs(productCollectionRef).then(response => {
        return response.docs.map(doc => {
            return {...doc.data() , id: doc.id}
        })
    }).catch(error => console.log(error));

}
export const addProductService = async (product) => {
    return await addDoc(productCollectionRef , product)
}

export const deleteProductService = async (id) => {
    const elementDoc = doc(database , "terenuri" , id);
    await deleteDoc(elementDoc)
}
