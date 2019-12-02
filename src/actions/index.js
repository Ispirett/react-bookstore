import actions from  './actionsTypes'


export const addBook = (book) =>(
    {
        type:actions.CREATE_BOOK,
        value:book

    }
);

export const deleteBook = (index) =>(
    {type: actions.DELETE_BOOK, index:index}
);
