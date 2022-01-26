import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {CardMedia} from "@mui/material";
import {getImage} from "./actions";
import LoadingComponent from "../Loading"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

function CardMediaCustom(props) {
    const {idImage , folderId ,height ,width}= props
    const [loading, setLoading]=useState(false);
    const [picture, setPicture]=useState(null);

    const handleCallback = (url) => {
        setLoading(false)
        setPicture(url)
    }
    useEffect(() => {
        setLoading(true)
       props.dispatchGetImage(folderId ,idImage, handleCallback)

    },[] );
    if(loading)
    {
        return <LoadingComponent/>
    }
    else {
        return (
            <CardMedia
                component="img"
                height={height}
                width={width}
                image={picture}
            />
        )
    }
}
const mapDispatchToProps= {
    dispatchGetImage:getImage,
}

export default connect(null, mapDispatchToProps)(CardMediaCustom)
