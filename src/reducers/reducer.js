import {combineReducers} from "redux";
import contactReducer from "../views/Contact/reducer"

export default combineReducers({
    contact: contactReducer
})