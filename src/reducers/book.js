import {createStore} from 'redux'
import initialState from './index'
import {default as actions} from "../actions/actionsTypes";

const bookReducer = (store = initialState, action) =>{
    switch (action.type) {
        case actions.CREATE_BOOK:
            return {
                ...store,
                books:store.books.concat(action.value)
            };

        case actions.DELETE_BOOK:

          return {
              ...store,
              books:  store.books.filter(book => book.id !== action.index)
          };

        default:
            return store;
    }
};

export const store = createStore(bookReducer);

store.subscribe(()=>{
    console.log("description", store.getState())
});
