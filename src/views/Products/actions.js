import {SET_PRODUCTS , GET_PRODUCTS , IS_LOAD} from"./constants"
import {fetchProducts} from "../../services/firebaseService";


export const getProduct = () => {
    return async(dispatch) => {
        dispatch(isLoading(true))
        try {
            const products = await fetchProducts()
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
    return{type: IS_LOAD , loading:loading}
}