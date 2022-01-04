import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import { UserContext} from '../../components/context/UserContext'
import SnackbarCustom from "../../components/SnackbarCustom/index"
function GlobalWrapper(props) {

    const { children } = props;
    const [authUser, setAuthUser ] = useState()
    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })
    return(
        <>
         <SnackbarCustom/>
            <UserContext.Provider value={authUser}>
                {children}
            </UserContext.Provider>
        </>
)
}

export default GlobalWrapper;
