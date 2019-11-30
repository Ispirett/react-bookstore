import {createStore} from 'redux'
import initialState from './index'
const bookReducer = (store = initialState, action) =>{
    switch (action.type) {
        case 'CREATE_BOOK':
            return store;
        case 'DELETE_BOOK':
            return store;
        default:
            return store;

    }
};

export const store = createStore(bookReducer);

store.subscribe(()=>{
    console.log("description", store.getState())
});
