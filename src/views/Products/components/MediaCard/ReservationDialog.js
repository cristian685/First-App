import React, {useState, useEffect, useContext} from 'react'
import {connect} from 'react-redux';
import {TextField, Button, Typography, CardContent, Card,Box} from "@mui/material";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CustomTable from "../../../../components/ReservationTimePicker";
import DialogCustom from "../../../../components/DialogCustom";
import { UserContext } from '../../../../context/UserContext';
import { getReservationsById , addReservation} from '../../../../actions/reservationActions'
import {openSnackbar} from "../../../../components/SnackbarCustom/actions";


const steps = [
    'Selecteaza ora si data',
    'Completeaza datele de contact',
    'Cerere de rezervare trimisa',
];

const theme = createTheme({
    palette: {
        primary: {
            main:'#003333',
        },
        secondary: {
            main: '#330033',
        },
    },
});

const RESERVATIONS = [
    {label: '08:00 - 09:00', value: '08:00 - 09:00', checked: false},
    {label: '09:00 - 10:00', value: '09:00 - 10:00', checked: false},
    {label: '10:00 - 11:00', value: '10:00 - 11:00', checked: false},
    {label: '11:00 - 12:00', value: '11:00 - 12:00', checked: false},
    {label: '12:00 - 13:00', value: '12:00 - 13:00', checked: false},
    {label: '13:00 - 14:00', value: '13:00 - 14:00', checked: false},
    {label: '14:00 - 15:00', value: '14:00 - 15:00', checked: false},
    {label: '15:00 - 16:00', value: '15:00 - 16:00', checked: false},
    {label: '16:00 - 17:00', value: '16:00 - 17:00', checked: false},
    {label: '17:00 - 18:00', value: '17:00 - 18:00', checked: false},
    {label: '18:00 - 19:00', value: '18:00 - 19:00', checked: false},
    {label: '19:00 - 20:00', value: '19:00 - 20:00', checked: false},
    {label: '20:00 - 21:00', value: '20:00 - 21:00', checked: false},
    {label: '21:00 - 22:00', value: '21:00 - 22:00', checked: false},
    {label: '22:00 - 23:00', value: '22:00 - 23:00', checked: false},
    {label: '23:00 - 24:00', value: '23:00 - 24:00', checked: false},
];



function ReservationDialog(props) {

    const [selectedDate, setSelectedDate] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName , setLastName] = useState(null);
    const [stateReservations, setStateReservations] = useState(RESERVATIONS);
    const { teren, dispatchFetchReservations, dispatchAddReservation, reservations ,dispatchOpenSnackbar} = props;
    const userContext  = useContext(UserContext);
    const { id ,name } = teren;
    const [activeTeren, setActiveTeren] = useState('');
    const [openNextDialog, setOpenNextDialog] = useState(false);
    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

    useEffect(() => {
        if(activeTeren) {
            dispatchFetchReservations(activeTeren)
        }
    }, [activeTeren])

    const handleToggleElement = (id) => () => {
        setActiveTeren(id )
        setOpenNextDialog(false);
        setStateReservations(RESERVATIONS);

    }

    const  handleNextAction = () => {
        if(minimRequiredChecked){
            setOpenNextDialog(!openNextDialog)
        }
        else {
            dispatchOpenSnackbar('warning' ,'Selectati data si ora')
        }
    }

    const  handleCloseSecondDialog = () => {
        setOpenNextDialog(false)
    }

    const handleCloseConfirmationDialog = () => {
            setOpenConfirmationDialog(false)
        setStateReservations(RESERVATIONS);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }


    const handleConfirmReservation = () => {
            if (phone != null && firstName != null && lastName != null) {
                dispatchAddReservation({
                    idTeren: activeTeren,
                    numeTeren: name,
                    userid: userContext.uid,
                    phone,
                    firstName,
                    lastName,
                    isConfirmed:false,
                    date: new Date(selectedDate).toISOString(),
                    hours:
                        stateReservations
                            .filter(item => item.checked)
                            .map(item => item.value)
                })
                 setActiveTeren('')
                setOpenNextDialog(false)
                setOpenConfirmationDialog(true)
            } else {
                setOpenNextDialog(true)
                setOpenConfirmationDialog(false)
                dispatchOpenSnackbar('warning' ,'Completati toate campurile')
            }
        }

    const handleTimeChange = ({ value }) => {
        const findIndex = stateReservations.findIndex(item => item.value === value);

        if (findIndex !== -1) {
            const currentReservation = stateReservations[findIndex];
            const newReservation = [
                ...stateReservations.slice(0, findIndex),
                {...currentReservation, checked: !currentReservation.checked},
                ...stateReservations.slice(findIndex + 1, stateReservations.length),
            ];

            setStateReservations(newReservation);
        }
    }
    let filteredReservationByDate = null;
    let disabledHours = [];
    if(selectedDate) {
        filteredReservationByDate = reservations.filter(item => {
            return item?.date?.substr(0, 10) === selectedDate?.substr(0,10) && item.isConfirmed
        })
        disabledHours = filteredReservationByDate.reduce((acc, item) => {
            return [...acc, ...item.hours]
        }, [])
    }

    console.log(disabledHours, reservations)
    const minimRequiredChecked = stateReservations.find((item) => item.checked )
    return(

        <>
            <ThemeProvider theme={theme}>
            <Button
                onClick={handleToggleElement(id)}
                display='flex'
                variant="contained"
                color="secondary"
            >Rezervare</Button>
                <DialogCustom
                    maxWidthDialog="sm"
                    open={!!activeTeren}
                    onNext={handleNextAction}
                    dialogNextLabel="Next"
                    onClose={handleToggleElement('')}
                    dialogCloseLabel='exit'
                     dialogTitle={ <Box sx={{width: '100%'}}>
                         <Stepper activeStep={0} alternativeLabel>
                             {steps.map((label) => (
                                 <Step key={label}>
                                     <StepLabel>{label}</StepLabel>
                                 </Step>
                             ))}
                         </Stepper>
                     </Box>}
                >
                    <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                        {name}
                    </Typography>
                    <Box sx={{marginTop:5}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            minDate={new Date()}
                            label="Selecteaza data"
                            value={selectedDate}
                            onChange={(newValue) => {
                                setSelectedDate(new Date(newValue).toISOString());
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                    {selectedDate ?
                        <CustomTable
                            onChange={handleTimeChange}
                            list={stateReservations}
                            checkIntervals={disabledHours || []}
                        /> :
                        <Typography>
                            Please chose a date
                        </Typography>
                    }
                    </Box>
                </DialogCustom>

            <DialogCustom
                maxWidthDialog="sm"
                open={openNextDialog}
                onClose={handleCloseSecondDialog}
                onConfirm={handleConfirmReservation}
                dialogConfirmLabel="Trimite cererea de rezervare"
                dialogTitle={
                    <Box sx={{width: '100%'}}>
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                }
                onBackLabel={handleCloseSecondDialog}
                dialogBackLabel='Back'

            >

                <Typography gutterBottom variant="h5" component="div" marginTop={'2px'}>
                    {name}
                </Typography>
                <Box sx={{marginTop:5}}>
                <TextField
                    label="First Name"
                    margin="normal"
                    required
                    type="name"
                    fullWidth
                    name="name"
                    onChange={handleFirstNameChange}
                />
                </Box>
                <Box sx={{marginTop:5}}>
                <TextField
                    label="Last Name"
                    margin="normal"
                    required
                    type="name"
                    fullWidth
                    name="name"
                    onChange={handleLastNameChange}
                />
                </Box>
                <Box sx={{marginTop:5}}>
                <TextField
                    label="Introdu numarul de telefon"
                    margin="normal"
                    required
                    type="phone"
                    fullWidth
                    name="phone"
                    onChange={handlePhoneChange}
                />
                </Box>
                <Box sx={{marginTop:9}}>
                </Box>
            </DialogCustom>
                <DialogCustom
                    maxWidthDialog="sm"
                    open={openConfirmationDialog}
                    onClose={handleCloseConfirmationDialog}
                    dialogTitle= {<Box sx={{width: '100%'}}>
                    <Stepper activeStep={2} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>}
                >

                    <Card sx={{ display: 'flex' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {firstName} {lastName} ,{name} {selectedDate} {phone}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button
                        onClick={handleCloseConfirmationDialog}
                        fullWidth='10'
                        display='flex'
                        variant="contained"
                        color="secondary"
                    >Exit</Button>
                </DialogCustom>
            </ThemeProvider>
        </>
    )
}


const mapStateToProps = state => {
    const { reservations } = state.reservations;
    return {
        reservations,
    };
}

const mapDispatchToProps= {
    dispatchFetchReservations: getReservationsById,
    dispatchAddReservation: addReservation,
    dispatchOpenSnackbar:openSnackbar,
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDialog)
