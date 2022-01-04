import {
    SET_PRODUCTS ,
    IS_LOAD,
    SET_RESERVATIONS
} from"./constants";

import {
    addReservationService,
    fetchProductsService,
    fetchReservationService,
} from '../../services/firebaseService';
import {
    openSnackbar
} from '../../components/SnackbarCustom/actions';;


export const getProduct = () => {
    return async(dispatch) => {
        dispatch(isLoading(true))
        try {
            const products = await fetchProductsService()
            dispatch( {
                type: SET_PRODUCTS,
                products: products
            })
        }
        catch(errors) {
            console.log(errors)
        }
        dispatch(isLoading(false))
    }

}

export const getReservations = () => {
    debugger
    return async(dispatch) => {
        dispatch(isLoading(true));
        try {
            const reservations = await fetchReservationService()
            dispatch( {
                type: SET_RESERVATIONS,
                reservations: reservations
            })
        }
        catch(errors) {
            console.log(errors)
        }
        dispatch(isLoading(false))
    }

}

export const addReservation = reservation => {
    return async(dispatch) => {
        dispatch(isLoading(true))
        try{
            const responseReservationId = await addReservationService(reservation);
            if (responseReservationId)
            {
                dispatch(getReservations())
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


export const isLoading= (loading) => {
    return {
        type: IS_LOAD ,
        loading:loading
    }
}
