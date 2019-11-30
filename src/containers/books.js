import {default as actions} from "../actions/index"

export const addBook = (book) =>(
    {
        type:actions.createBook,
        value:book

    }
);

export const deleteBook = (index) =>(
    {type:actions.deleteBook, value: index}
);