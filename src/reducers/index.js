import {createStore, combineReducers} from "redux";
import {bookReducer} from "./book";
import {filterReducer} from "./filter";

const rootReducer =  combineReducers({bookReducer,filterReducer});
export const store = createStore(rootReducer);


// store.subscribe(()=>{
//     console.log("description", store.getState())
// });
