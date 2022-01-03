import { SET_EMAIL} from './constants';

const initialState = {
    email: "cosmin@gmail.com"
}

const reduxEmail = (state = initialState, action) => {
    switch(action.type)
    {
        case SET_EMAIL:
            return {email:action.email};
        default:
            return initialState;

    }
}

export default reduxEmail;