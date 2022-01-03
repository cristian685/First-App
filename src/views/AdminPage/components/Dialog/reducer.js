import {OPEN_DIALOG , CLOSE_DIALOG} from "./constants"

const initialState ={type :false};

const dialogReducer = (state = initialState, action) => {
    const {dialogType} = action?.dialog || {}
    switch(action.type){
        case OPEN_DIALOG:
            return {
                type:dialogType,
            }
        case CLOSE_DIALOG:
            return initialState

        default:
            return state
    }
}
export default dialogReducer