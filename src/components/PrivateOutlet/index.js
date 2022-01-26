import React, {useContext} from "react"
import {Outlet, Navigate} from "react-router-dom"
import {UserContext} from "../../context/UserContext"
import Navbar from "../Navbar";
import LoadingComponent from "../Loading";
import Box from "@mui/material/Box";
import {openSnackbar} from "../SnackbarCustom/actions";
import {connect} from "react-redux";

function PrivateOutlet(props) {
    const {dispatchOpenSnackbar}=props;
    const userContext= useContext(UserContext)


    if(userContext === undefined) {
        return<LoadingComponent/>;
    }

    return (
        <>
            <Navbar/>
            <Box sx={{ marginTop:3}}/>
            {userContext ? <Outlet/> :dispatchOpenSnackbar('warning' , 'Trebuie sa va logati pentru a accesa aceasta pagina') && <Navigate to="/login" />}
        </>
    )
}


const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(null, mapDispatchToProps)(PrivateOutlet)
