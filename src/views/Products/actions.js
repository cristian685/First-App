import {
    SET_PRODUCTS ,
    IS_LOAD,
    SET_RESERVATIONS
} from"./constants";
import {getReservationsById} from '../../actions/reservationActions'
import {
    addReservationService,
    fetchProductsService, fetchReservationsById,
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

export const isLoading= (loading) => {
    return {
        type: IS_LOAD ,
        loading:loading
    }
}
