import {combineReducers} from "redux";
import contactReducer from "../views/Contact/reducer"
import reduxEmail from "../views/File/reducer";
import productsReducer from "../views/Products/reducer";
import snackbarReducer from "../components/SnackbarCustom/reducer";
import adminReducer from "../views/AdminPage/reducer";
import homeReducer from "../views/Home/reducer";
import dialogReducer from "../views/AdminPage/components/Dialog/reducer";


export default combineReducers({
    contact: contactReducer,
    email: reduxEmail,
    products: productsReducer,
    admin : adminReducer,
    snackbar: snackbarReducer,
    homeloading : homeReducer,
    dialog : dialogReducer,
})