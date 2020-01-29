import initialState from './store'
import {default as actions} from "../actions/actionsTypes";

export const authenticationReducer = (store = initialState, action) =>{
    switch (action.type) {
        case actions.AUTHENTICATE:
            return {
                ...store,
                 token: action.token
            };

        default:
            return store

    }

};