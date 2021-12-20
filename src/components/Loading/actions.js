import {SET_LOADING} from "./constants";
import {SET_LOADED} from "./constants";

export const setCharts = () => dispatch => {
    dispatch({ type: SET_LOADING }); //Loading starts
    api.get('/charts')
        .then(charts =>
            dispatch({
                type: SET_LOADED, //Loading ends
                payload: charts.data,
            }))
        .catch(error => {
            //dispatch error
        });
};