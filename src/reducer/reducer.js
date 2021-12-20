import {combineReducers} from "redux";
import contactReducer from "../views/Contact/reducer"
import reduxEmail from "../views/File/reducer";
import productsReducer from "../views/Products/reducer";

export default combineReducers({
    contact: contactReducer,
    email: reduxEmail,
    products: productsReducer
})