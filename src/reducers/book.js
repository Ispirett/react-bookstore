import initialState from './store'
import {default as actions} from "../actions/actionsTypes";

export const bookReducer = (store = initialState, action) =>{
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

