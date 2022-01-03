import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger'
import reducer from "../reducer/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancer = composeWithDevTools || compose
const middleWare = [thunk];

export const store = createStore(
    reducer, composeEnhancer(applyMiddleware(...middleWare)));