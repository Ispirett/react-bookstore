import {store} from "../reducers/book";
const actions = {
    createBook: 'CREATE_BOOK',
    deleteBook: 'DELETE_BOOK',
};

store.dispatch(
    {
        type:actions.createBook,
        value: {id:1, title: 'Great book',category: 'horror'}
    }
);