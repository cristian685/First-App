import {SET_LOADED} from "./constants"
import {SET_LOADING} from "./constants"

const initialState=false;

const contactLoader = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case SET_LOADED:
            return {
                ...state,
                charts: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default contactLoader