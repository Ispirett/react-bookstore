import React from 'react'
import Book from "../components/Book";
import {connect} from 'react-redux'
import {deleteBook} from "../actions";


const mapPropsToState = state =>{
    const {books} = state;
    return{
        books
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        deleteBook: (value) => dispatch(deleteBook(value))
    }
};


const listBooks = props =>(
    props.books.map((book, index) =>(
        <Book key={index}
              id={book.id}
              title={book.title}
              category={book.category}
              clickHandler={() => props.deleteBook(book.id)}/>
    ))
);

export default connect(mapPropsToState, mapDispatchToProps) ((props) => (
    <table className='table table-dark  w-50'>
         <thead>
            <tr className='text-info'>
            <th>ID</th>
            <th>Title</th>
            <th>CATEGORY</th>
            </tr>
        </thead>

        <tbody id={'tbody'}>
        {listBooks(props)}
        </tbody>
   </table>

))
