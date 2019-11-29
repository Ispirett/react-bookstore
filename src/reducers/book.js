import redux from 'redux'
import initialState from './index'
const creatStore = redux.createStore();



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

const store = creatStore(bookReducer());

export {
    store
}