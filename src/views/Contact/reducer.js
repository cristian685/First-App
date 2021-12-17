import {SET_NAME} from "./constants";
const initialState={contact:"dasd"};

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAME:
            return {
                name:action.name,
            }
        default:
          return initialState
    }
}

export default contactReducer