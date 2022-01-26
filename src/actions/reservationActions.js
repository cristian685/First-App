import { IS_LOADING , SET_RESERVATIONS} from"../constants/reservationConstants"
import {
    fetchReservationsById,
    updateReservationFbService,
    deleteReservationService, addReservationService
} from "../services/firebaseService";
import  {openSnackbar} from "../components/SnackbarCustom/actions"


export const isLoading= (loading) => {
    return{type: IS_LOADING , loading:loading}
}
export const addReservation = reservation => {
    const {idTeren} =reservation;
    return async(dispatch) => {
        dispatch(isLoading(true))
        try{
            const responseReservationId = await addReservationService(reservation);
            if (responseReservationId)
            {
                dispatch(getReservationsById(idTeren))
                dispatch(openSnackbar('success', 'S-a creat rezervarea'))
            }
            dispatch(isLoading(false));
        }
        catch(errors) {
            dispatch(openSnackbar('error', errors.message))
        }
        dispatch(isLoading(false))
    }
}

export const deleteReservation = (id , idTeren) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            await deleteReservationService(id);
            dispatch(getReservationsById(idTeren))
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}

export const updateReservation = (reservation , idTeren) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            const {id,...other}=reservation
                   await updateReservationFbService(id ,other);
            dispatch(getReservationsById(idTeren))
            dispatch(openSnackbar('success', 'Elementul a fost editat cu succes'))
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))
    }
}
export const getReservationsById = (idTeren) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        try {

            const reservations = await fetchReservationsById(idTeren)
            dispatch({
                type: SET_RESERVATIONS,
                reservations: reservations
            })
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))
    }
}