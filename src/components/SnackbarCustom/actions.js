import {CLOSE_SNACKBAR, OPEN_SNACKBAR} from "./constants";

export const openSnackbar = (snackbarType , message) =>{
    return {
        type : OPEN_SNACKBAR,
        snackbar : {snackbarType,message}
    }
}
export const closeSnackbar = () =>{
    return {
        type : CLOSE_SNACKBAR
    }
}