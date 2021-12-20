import { SET_EMAIL } from './constants';

export function setEmail (newEmail) {
    return (
        {type:SET_EMAIL, email: newEmail}
    )
}