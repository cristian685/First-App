import { IS_LOADING, SET_RESERVATIONS} from "../constants/reservationConstants";

const initialState={
    reservationsById :[],
    loading:false,
    reservations:[],
};

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case SET_RESERVATIONS:
            return {
                ...state,
                reservations: action.reservations
            }

        default:
            return state
    }
}

export default adminReducer
