import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCIkih1j9-ivDu90MHwdrS1xtKRBU66juI",
    authDomain: "licenta-92ce9.firebaseapp.com",
    projectId: "licenta-92ce9",
    storageBucket: "licenta-92ce9.appspot.com",
    messagingSenderId: "442965189483",
    appId: "1:442965189483:web:fd633fde34a5348c94a22e",
}
export const app= initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getFirestore(app);