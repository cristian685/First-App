import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

import { UserContext} from '../../context/UserContext'
import { ThemeContext} from '../../context/ThemeContext'
import Navbar from "../../components/Navbar";
import {Container} from "@mui/material";

/**
 * GlobalWrapper
 */
function GlobalWrapper(props) {
    const { children } = props;
    const [authUser, setAuthUser ] = useState(null)
    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })

    return (
        <ThemeContext.Provider value={'black'}>
            <UserContext.Provider value={authUser}>
                {children}
            </UserContext.Provider>
        </ThemeContext.Provider>
    )

}

export default GlobalWrapper;