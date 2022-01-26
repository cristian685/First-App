import { IS_LOADING, SET_RESERVATIONS_BY_USER} from "./constants";

const initialState={
    loading:false,
    reservations:[],
};

const userAccountReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case SET_RESERVATIONS_BY_USER:
            return {
                ...state,
                reservations: action.reservations
            }

        default:
            return state
    }
}

export default userAccountReducer
