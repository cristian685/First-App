import {fetchReservationsByUser, fetchReservationService} from "../../services/firebaseService";
import {SET_RESERVATIONS_BY_USER ,IS_LOADING} from "./constants";
import {openSnackbar} from "../../components/SnackbarCustom/actions";


export const isLoading= (loading) => {
    return{type: IS_LOADING , loading:loading}
}

export const getReservationsByUser = (id) => {

    return async (dispatch) => {
        dispatch(isLoading(true));
        try {
            const reservations = await fetchReservationsByUser(id);
            dispatch({
                type: SET_RESERVATIONS_BY_USER,
                reservations: reservations
            })
        } catch (errors) {
            dispatch(openSnackbar('error', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))
    }
}