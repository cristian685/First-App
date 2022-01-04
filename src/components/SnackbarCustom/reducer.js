import {
    OPEN_SNACKBAR,
    CLOSE_SNACKBAR
} from "./constants"

const initialState = {
    type : '',
    message: ''
};

const snackbarReducer = (state = initialState, action) => {
    const {snackbarType , message } = action?.snackbar || {}
    switch(action.type){
        case OPEN_SNACKBAR:
            return {
                type:snackbarType,
                message:message,
            }
        case CLOSE_SNACKBAR:
            return initialState

        default:
            return state
    }
}
export default snackbarReducer
