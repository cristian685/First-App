import {SET_PRODUCTS, IS_LOADING} from "./constants";


const initialState={
    products:[],
    loading:false,
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

        default:
            return state
    }
}

export default adminReducer