import React, {useEffect, useState} from "react";
import {CardMedia} from "@mui/material";
import {connect} from "react-redux";
import {getImage} from "./actions";
import LoadingComponent from "../Loading"

function CardMediaCustom(props) {
    const {idImage}= props
    const [loading, setLoading]=useState(false);
    const [picture, setPicture]=useState(null);

    const handleCallback = pic => {
        setLoading(false)
        setPicture(pic)
    }
    useEffect(() => {
        setLoading(true)
       props.dispatchGetImage(idImage, handleCallback)

    },[] );
    if(loading)
    {
        return <LoadingComponent/>
    }
    else {
        return (
            <CardMedia
                component="img"
                height="140"
                image={picture}
                alt="green iguana"
            />
        )
    }
}
const mapDispatchToProps= {
    dispatchGetImage:getImage,
}

export default connect(null, mapDispatchToProps)(CardMediaCustom)