import {SET_PRODUCTS , GET_PRODUCTS , IS_LOADING} from"./constants"
import {addProductService, fetchProductsService , deleteProductService} from "../../services/firebaseService";
import  {openSnackbar} from "../../components/SnackbarCustom/actions"

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
    return{type: IS_LOADING , loading:loading}
}

export const deleteProduct = (id) => {
    return async (dispatch) => {
        dispatch(isLoading(true))
        try {
            await deleteProductService(id);
            dispatch(getProduct())
        } catch (errors) {
            dispatch(openSnackbar('errors', errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))

    }
}

export const createProduct = (product) => {
    return async(dispatch) => {
        dispatch(isLoading(true))
        try{
            await addProductService(product);
            dispatch(getProduct())
            dispatch(openSnackbar('success','S-a creat produsul cu succes'))
        }
        catch(errors) {
            dispatch(openSnackbar('errors' , errors.message))
            console.log(errors)
        }
        dispatch(isLoading(false))
    }
}