import {CLOSE_DIALOG, OPEN_DIALOG} from "./constants";

export const openDialog = (dialogType) =>{
    return {
        type : OPEN_DIALOG,
        dialog: {dialogType}
    }
}
export const closeDialog = () =>{
    return {
        type : CLOSE_DIALOG
    }
}