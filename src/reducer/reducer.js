import {combineReducers} from "redux";
import productsReducer from "../views/Products/reducer";
import snackbarReducer from "../components/SnackbarCustom/reducer";
import adminReducer from "../views/AdminPage/reducer";
import reservationReducer from "./reservationReducer";
import userAccountReducer from '../views/YourAccountPage/reducer'

export default combineReducers({
    products: productsReducer,
    admin : adminReducer,
    snackbar: snackbarReducer,
    reservations : reservationReducer,
    userAccountReservations : userAccountReducer
})
