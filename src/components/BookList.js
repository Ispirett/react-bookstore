import React from 'react'
import Book from "./Book";
import {connect} from 'react-redux'


const mapPropsToState = state =>{
    const {books} = state;
    return{
        books
    }
};

const listBooks = props =>(
    props.books.map(book =>(
        <Book id={book.id} title={book.title} category={book.category}/>
    ))
)
export default connect(mapPropsToState) ((props) => (
    <table className='table table-dark  w-50'>
        <tr className='text-info'>
            <th>ID</th>
            <th>Title</th>
            <th>CATEGORY</th>
        </tr>
        {listBooks(props)}
    </table>

))
