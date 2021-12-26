import React, {useContext} from "react"
import {Outlet, Navigate} from "react-router-dom"
import {UserContext} from "../../context/UserContext"
import Navbar from "../Navbar";
import LoadingComponent from "../Loading";

function PrivateOutlet() {
    const userContext= useContext(UserContext)
    console.log(userContext)


    if(userContext === undefined) {
        return<LoadingComponent/>;
    }

    return (
        <>
            <Navbar/>
            {userContext ? <Outlet/> : <Navigate to="/login" />}
        </>
    )
}



export default PrivateOutlet;