import React, {useCallback, useEffect, useRef, useState} from "react"

import {GoogleMap , useLoadScript , Marker , InfoWindow} from "@react-google-maps/api"

const libraries=["places"]
const mapContainerStyle ={
    width: "30vw",
    height: "30vh",
};
const center={
    lat:0,
    lng:0,
};


export default function Maps(props){
    const{isLoaded, loadError} = useLoadScript({
        googleMapsApiKey:"AIzaSyDgiPYs5QyW2ba1QS13Jkzbtx3ZLTv15yA",
        libraries,
    })

    const{lat , lng} =props

    if(lat !=null && lng!=null)
{
    center.lat=lat;
    center.lng=lng;
}

    const mapRef=useRef();
    const onMapLoad=useCallback((map) => {
       mapRef.current=map;
    }, [])

    if(loadError) return "error";
    if(!isLoaded) return "loading maps";

        return <div>
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={17}
            center={center}
            // onClick={onMapClick}
            onLoad={onMapLoad}
        >
            <Marker
                position={{lat:center.lat, lng: center.lng}}
                incon={{
                    scaledSize:new window.google.maps.Size(30,30),
                    origin:new window.google.maps.Point(0,0),
                    anchor: new window.google.maps.Point(15,15),
                }}

            />
        </GoogleMap>
    </div>
    }

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyDgiPYs5QyW2ba1QS13Jkzbtx3ZLTv15yA",
// })(Maps)

