import React, {useContext, useEffect, useState} from "react"
import {UserContext} from "../../context/UserContext";
import {Box, Button, Typography} from "@mui/material";
import LoadingComponent from "../../components/Loading";
import { getReservationsByUser} from "./actions";
import {connect} from "react-redux";
import UserReservationCard from "./userReservationCard";
import PropTypes from "prop-types";


function YourAccountPage(props) {

    const {reservations ,loading} =props

   // const {userid} =reservations

    const userContext= useContext(UserContext)
    const {displayName , uid} = userContext
    let nameFromEmail   = userContext?.email;


    useEffect(() => {
        if(uid){
        props.dispatchFetchReservationsByUserId(uid)
        }
    }, [uid])

    const [sortType ,setSortType] = useState("")
    const handleOnSort  = () => {
        setSortType('desc')
    }

    const sorted = reservations.sort((a,b ) => {
        const byDate  =  (sortType) ? -1 : 1 ;
        return byDate  * a.date.localeCompare(b.date)
    })

    return (<div style={{ width: '100%' }}>
            <Typography component="h1" variant='h6' gutterBottom>Rezervarile tale : </Typography>
            <Button onClick={handleOnSort}>
            Sortare dupa data (cele mai noi)
            </Button>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    minWidth: 350,
                    borderRadius: 1,
                }}
            >
                {loading && <LoadingComponent/>}
                {(sorted || []).map(product => {
                    return <UserReservationCard
                        userId={displayName}
                        key={product.id}
                        reservationPost={product}
                    />

                })}
            </Box>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        ...state.userAccountReservations,
    }
}

const mapDispatchToProps= {
    dispatchFetchReservationsByUserId: getReservationsByUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(YourAccountPage)