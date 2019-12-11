import {default as actions} from "../actions/actionsTypes";
import initialState from './store'
export const filterReducer = (store = initialState, action) =>{
    switch (action.type) {
        case  actions.FILTER_BOOK:
            return {
                ...store,
                filter: action.category
            };
        default:
            return store
    }
}