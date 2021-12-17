
import React, {useContext, useEffect, useState} from 'react';

import { CssBaseline, Typography, Container } from '@mui/material'

import {UserContext} from "../../context/UserContext";
import { collection, getDocs } from "firebase/firestore";
import {database} from "../../config/firebaseConfig";

export default function SimpleContainer() {

    const user= useContext(UserContext)
    console.log(user)

    // await addDoc(collection(database, "products"), {
    //     name: "Tokyo",
    //     country: "Japan"
    // )}

 const [products,setProducts]=useState([])

useEffect( () =>{
    const fetchData=async () => {
    const aboutSnapshot = await getDocs(collection(database, 'products'))
        aboutSnapshot.forEach((doc) =>{
            setProducts([...products,doc.data()])
    })
    }
    return fetchData();
}, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">


                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
            <UserContext.Consumer>
                {user => {
                    return <div>
                        {user?.email}
                    </div>
                }}
            </UserContext.Consumer>
        </React.Fragment>
    );
}