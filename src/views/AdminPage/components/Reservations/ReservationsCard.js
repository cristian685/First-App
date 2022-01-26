import React, {useState} from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box, Button, Checkbox, FormControlLabel
} from '@mui/material'
import {createTheme} from "@mui/material/styles";
import {purple} from "@mui/material/colors";
import SaveDialog from "./SaveDialog";


const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#1b5e20',
        },
    },
});


export default function ReservationsCard(props) {

    const { reservationPost  ,onConfirmReservation ,idTeren } = props;
   const { phone, firstName , lastName ,id  ,isConfirmed} = reservationPost;
   const [confirmedReservation, setConfirmedResevation] =  useState(false)
    const [openSaveDialog, setOpenSaveDialog] = useState(false)



    const handleOpenSaveDialog = () => {
        setOpenSaveDialog(true);
    };
    const handleCloseSaveDialog = () => {
        setOpenSaveDialog(false);
    };

    const handleChangeReservation= (type) => (event) =>{
        const data = {
            ...reservationPost,
            ...confirmedReservation,
            [type]: event.target.checked
        }
        setConfirmedResevation(data)
    }

    const handleSaveReservation = () => {
        onConfirmReservation(confirmedReservation ,idTeren);
        debugger;
    }


     if(isConfirmed ===false)
     {
             return (
                 <Card sx={{display: 'flex', maxHeight: 230, marginTop: 1}}>
                     <Box sx={{
                         display: 'flex', flexDirection: 'column', maxHeight: 230,
                         maxWidth: 280, margin: 0, marginTop: 6
                     }}>
                     </Box>
                     <Box sx={{
                         display: 'flex', flexDirection: 'column', minWidth: 150,
                         margin: 1,
                     }}>
                         <CardContent>
                             <FormControlLabel
                                 control={<Checkbox color="primary" onChange={handleChangeReservation('isConfirmed')}/>}
                                 label="Confirmare"

                             />

                             <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                                 {phone}
                             </Typography>
                             <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                                 firstname: {firstName}
                             </Typography>
                             <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                                 lastName: {lastName}
                             </Typography>
                             <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                                 id: {id}
                             </Typography>
                             <Button
                                 onClick={handleOpenSaveDialog}
                                 display='flex'
                                 variant="outlined"
                                 color="primary"
                             >Salveaza</Button>
                             <SaveDialog
                                 open={openSaveDialog}
                                 onClose={handleCloseSaveDialog}
                                 onSave={handleSaveReservation}
                             />
                         </CardContent>
                     </Box>
                 </Card>
             )
         }
     else {
         return(
             <Card sx={{display: 'flex', maxHeight: 230, marginTop: 1}}>
                 <Box sx={{
                     display: 'flex', flexDirection: 'column', maxHeight: 230,
                     maxWidth: 280, margin: 0, marginTop: 6
                 }}>
                 </Box>
                 <Box sx={{
                     display: 'flex', flexDirection: 'column', minWidth: 150,
                     margin: 1,
                 }}>
                     <CardContent>
             <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
             {phone}
         </Typography>
             <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                 firstname: {firstName}
             </Typography>
             <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                 lastName: {lastName}
             </Typography>
                 <Typography variant="body2" color="text.secondary" marginTop={'10px'}>
                    CONFIRMATA
                 </Typography>
                     </CardContent>
                 </Box>
             </Card>
         )
     }
}