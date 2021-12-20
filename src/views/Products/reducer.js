import {SET_PRODUCTS ,GET_PRODUCTS , IS_LOAD} from "./constants";


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

        default:
            return initialState
    }
}

export default productsReducer