import {
    SET_PRODUCTS,
    IS_LOAD,
    SET_RESERVATIONS,
} from "./constants";


const initialState={
   products:[],
    loading:false,
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
        case IS_LOAD:
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

export default productsReducer
