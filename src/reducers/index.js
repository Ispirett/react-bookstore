import {createStore, combineReducers} from "redux";
import {bookReducer} from "./book";
import {filterReducer} from "./filter";
import {authenticationReducer} from "./authenticate";

const rootReducer =  combineReducers({bookReducer,filterReducer, authenticationReducer});
export const store = createStore(rootReducer);


store.subscribe(()=>{
    console.log("description", store.getState())
});
