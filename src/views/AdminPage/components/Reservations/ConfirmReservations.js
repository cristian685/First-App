import React, {useEffect, useState} from "react"
import { Button} from "@mui/material";
import DialogCustom from "../../../../components/DialogCustom";
import {deleteReservation, getReservationsById, updateReservation} from "../../actions";
import {connect} from "react-redux";
import ReservationsTable from "./ReservationsTable";


function ConfirmReservations(props) {

    const {reservations , idTeren ,dispatchUpdateReservation ,dispatchDeleteReservation  ,loading} =props
    const [openReservationDialog, setOpenReservationDialog] = useState(false);

    useEffect(() => {
        if(openReservationDialog) {
             props.dispatchFetchReservations(idTeren);
        }
        return () => {
        }
    },[openReservationDialog] );


    const handleToggleReservations = () => {
        setOpenReservationDialog(!openReservationDialog)
    }



    const rows =
        (reservations || []).map(product =>{
          return  {
              id: product.id,
              firstName: product.firstName,
              lastName:product.lastName,
              phone:product.phone,
              userid: product.userid,
              dateReserved: product.date.substr(0, 10),
              hours:product.hours,
              isConfirmed:product.isConfirmed ,

          }

        })

    return (
    <>

    <DialogCustom open={openReservationDialog} onClose={handleToggleReservations} maxWidthDialog='lg'>
        <ReservationsTable loading={loading}
                           rows={rows}
                           idTeren={idTeren}
                           onConfirmReservation={dispatchUpdateReservation}
                           onDeleteReservation={dispatchDeleteReservation}
        />

        {/*<Box sx={{ flexDirection: 'row' }}>*/}
        {/*    {loading && <LoadingComponent/>}*/}
        {/*    {(sorted || []).map(product => {*/}
        {/*        return <UpdateReservationsCard*/}
        {/*            key={product.id}*/}
        {/*            reservationPost={product}*/}
        {/*        />*/}
        {/*    })}*/}
        {/*</Box>*/}

    </DialogCustom>
        <Button
            onClick={handleToggleReservations}
            display='flex'
            variant="outlined"
            color="primary"
        >Confirm Reservations</Button>

    </>
)
}
const mapStateToProps = state => {
    const { reservations ,loading } = state.admin;
    return {
        reservations,
         loading,
    };
}

const mapDispatchToProps= {
    dispatchFetchReservations: getReservationsById,
    dispatchUpdateReservation:updateReservation,
    dispatchDeleteReservation : deleteReservation,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmReservations)

