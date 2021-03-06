    import {SET_PRODUCTS, IS_LOADING, SET_RESERVATIONS} from "./constants";



const initialState={
    products:[],
    loading:false,
    reservations:[],
};

const adminReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
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
