import {IS_LOAD} from "../Products/constants";


export const isLoading= (loading) => {
    return{type: IS_LOAD , loading:loading}
}