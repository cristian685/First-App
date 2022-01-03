import {SET_NAME ,IS_LOADING} from "./constants";

const initialState={
    loading: false ,
    name:''
};

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAME:
            return {
                name:action.name,
            }
        case IS_LOADING:
            return{
                loading: action.loading
            }
        default:
          return initialState
    }
}

export default contactReducer