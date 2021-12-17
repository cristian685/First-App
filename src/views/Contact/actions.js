import {SET_NAME} from "./constants";

export function setName (newName){
    return {type: SET_NAME, name: newName}
}