import {IS_LOAD} from "./constants";


const initialState={
    loading:false,
};

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_LOAD:
            return {
                ...state,
                loading: action.loading
            }

        default:
            return initialState
    }
}

export default homeReducer