import {collection, getDocs} from "firebase/firestore";
import {database} from "../config/firebaseConfig";

const usersCollectionRef = collection(database,"users");
const productCollectionRef = collection(database,"products");

export const fetchUser = async () => {
    return await getDocs(usersCollectionRef).then(response => {
       return response.docs.map(doc => {
            return {...doc.data() , id: doc.id}
        })
    }).catch(error => console.log(error))
    ;

}

export const fetchProducts = async () => {
    return await getDocs(productCollectionRef).then(response => {
        return response.docs.map(doc => {
            return {...doc.data() , id: doc.id}
        })
    }).catch(error => console.log(error))
        ;

}