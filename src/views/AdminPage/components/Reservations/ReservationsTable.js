import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import { useState} from "react";
import DialogCustom from "../../../../components/DialogCustom";
import {Box, Button} from "@mui/material";
import LoadingComponent from "../../../../components/Loading";
import ReservationsCard from "./ReservationsCard";


export default function ReservationsTable(props ) {

    let [itemId , setItemId] =useState("")


     const {onConfirmReservation ,onDeleteReservation ,idTeren ,loading } =props
    const [openUpdateDialog , setOpenUpdateDialog] = useState(false)
    const {  rows  } =props

    const handleToggleReservations = () => {
        if(itemId)
        {
            setOpenUpdateDialog(true);
        }
    }

   const handleCloseDialog = () => {
        setOpenUpdateDialog(false)
    }

    const columns = [
        { field: 'firstName', width: 100 },
        { field: 'lastName' , width: 100 },
        { field: 'phone', width: 150  },
        { field: 'userid', type: 'string', width: 130  },
        { field: 'dateReserved', type: 'date', width: 120 },
        { field: 'hours' , width: 350  },
        { field: 'isConfirmed',type:'boolean', width: 130 }
    ];

    const [sortModel, setSortModel] = React.useState([
        {
            field: 'username',
            sort: 'asc',
        },
    ]);


    const handleOnDeleteReservation = () => {
        if(itemId) {
            (itemId || []).map((product ) => {
                onDeleteReservation(product, idTeren)
            })}
    }

    return (
        <>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                sortModel={sortModel}
                rows={rows}
                columns={columns}
                onSortModelChange={(model) => setSortModel(model)}
                checkboxSelection
                onSelectionModelChange={itm => setItemId(itm)}
            />
        </div>
            <Button
                onClick={handleToggleReservations}
                display='flex'
                variant="outlined"
                color="primary"
            >Update Reservation</Button>
            <DialogCustom open={openUpdateDialog} onClose={handleCloseDialog}>
                <Box sx={{ flexDirection: 'row' }}>
                    {loading && <LoadingComponent/>}
                    {(rows || []).map(product => {
                        for (let i=0 ; i<= itemId.length ; i++)
                        {
                        if(product.id === itemId[i]) {
                            return <ReservationsCard
                                key={product.id}
                                reservationPost={product}
                                onConfirmReservation={onConfirmReservation}
                                idTeren={idTeren}
                            />
                        }
                        }})
                    }
                </Box>
            </DialogCustom>
            <Button
                onClick={handleOnDeleteReservation}
                display='flex'
                variant="outlined"
                color="primary"
            >Sterge rezervarea</Button>
        </>
    );
}
