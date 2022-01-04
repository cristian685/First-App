import React, {useState, useEffect, useContext} from 'react'
import {connect} from 'react-redux';
import { TextField, Button , Typography } from "@mui/material";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


import { UserContext } from '../../../../context/UserContext';
import CustomTable from "../../../../components/CustomTable";
import DialogCustom from "../../../../components/DialogCustom";

import {addReservation, getReservations} from '../../actions';


const RESERVATIONS = [
    {label: '08:00', value: '08:00', checked: false},
    {label: '09:00', value: '09:00', checked: false},
    {label: '10:00', value: '10:00', checked: false},
    {label: '11:00', value: '11:00', checked: false},
    {label: '12:00', value: '12:00', checked: false},
    {label: '13:00', value: '13:00', checked: false},
];



function ProductsDialog(props) {
    const [date, setDate] = React.useState(null);
    const [phone, setPhone] = React.useState(null);
    const [stateReservations, setStateReservations] = useState(RESERVATIONS);
    const { teren, dispatchFetchReservations, dispatchAddReservation, reservations } = props;
    const userContext  = useContext(UserContext);
    const { id } = teren;
    const [activeTeren, setActiveTeren] = useState('');

    useEffect(() => {
        if(activeTeren) {
            dispatchFetchReservations(activeTeren)
        }

    }, [activeTeren])

    const handleToggleElement = (id) => () => {
        setActiveTeren(id)
    }

    const handleConfirmReservation = () => {

        dispatchAddReservation({
            idTeren: activeTeren,
            userid: userContext.uid,
            phone,
            date: new Date(date).toISOString(),
            hours:
                stateReservations
                    .filter(item => item.checked)
                    .map(item => item.value)
        })
        setActiveTeren('')
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }


    const handleTimeChange = ({ value }) =>  {
        const findIndex = stateReservations.findIndex(item => item.value === value);

        if(findIndex !== -1) {
            const currentReservation = stateReservations[findIndex];
            const newReservation = [
                ...stateReservations.slice(0, findIndex),
                {...currentReservation, checked: !currentReservation.checked},
                ...stateReservations.slice(findIndex + 1, stateReservations.length),
            ];

            setStateReservations(newReservation);
        }
    }
    let activeDateInterval = null;
    if(date) {
        activeDateInterval = reservations.find(item => {
            return item?.date?.substr(0, 10) === date?.substr(0,10)
        })
    }

    // const checkedIntervals =



    return(
        <>
            <Button
                onClick={handleToggleElement(id)}
                display='flex'
                color="secondary"
            >Rezervare</Button>
            <DialogCustom
                maxWidth="lg"
                open={!!activeTeren}
                onClose={handleToggleElement('')}
                onConfirm={handleConfirmReservation}
                dialogConfirmLabel="Rezerva"
                dialogTitle="Rezerva terenul"
            >
                <TextField
                    label="Introdu numarul de telefon"
                    margin="normal"
                    required
                    type="phone"
                    fullWidth
                    name="phone"
                    onChange={handlePhoneChange}

                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        minDate={new Date()}
                        label="Basic example"
                        value={date}
                        onChange={(newValue) => {
                            setDate(new Date(newValue).toISOString());
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

                {date ?
                    <CustomTable
                        onChange={handleTimeChange}
                        list={stateReservations}
                        checkIntervals={activeDateInterval?.hours || []}
                    /> :
                    <Typography>
                        Please chose a date
                    </Typography>
                }
            </DialogCustom>
        </>
    )
}


const mapStateToProps = state => {
    const { reservations } = state.products;
    return {
        reservations,
    };
}

const mapDispatchToProps= {
    dispatchFetchReservations: getReservations,
    dispatchAddReservation: addReservation
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDialog)
