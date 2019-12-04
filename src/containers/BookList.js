import React,{useState} from 'react'
import Book from "../components/Book";
import {connect} from 'react-redux'
import {deleteBook, filterBook} from "../actions";

import CategoryFilter from "../components/CategoryFilter";


const mapPropsToState = state =>{
    console.log(state);
    const {books} = state.bookReducer;
    return{
        books,
        option: state.filterReducer.filter
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        deleteBook: (value) => dispatch(deleteBook(value)),
        filterBook: (value) => dispatch(filterBook(value))
    }
};


const filterBooks = (props) => {
    let filter = props.books.filter(book => book.category === props.option);
    return  listBooks(filter,props)
};

const listBooks = (books,props) => (
     books.map((book, index) => (
        <Book key={index}
              id={book.id}
              title={book.title}
              category={book.category}
              clickHandler={() => props.deleteBook(book.id)}/>
    ))
);


export default connect(mapPropsToState, mapDispatchToProps) ((props) => {
    const [option, setOption] = useState('All');
    const handleFilter = (option,props) => {
        setOption(option);
        props.filterBook(option)
    };
    const displayBooks = (props) =>{
        if (option === 'All') {
            return listBooks(props.books,props)
        }
        else{
            return filterBooks(props)
        }
    };

    return (
        <div className={'w-90 pt-1'}>
        <CategoryFilter handleFilter={(option) => handleFilter(option, props)}/>
        {displayBooks(props)}
        </div>)

})



