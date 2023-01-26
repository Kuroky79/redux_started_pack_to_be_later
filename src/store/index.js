import {createStore, combineReducers, applyMiddleware} from "redux";
import {reducer} from "./reducer";
import {customerReducer} from "./CustomerReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({ // склейка reducers
    cash: reducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
