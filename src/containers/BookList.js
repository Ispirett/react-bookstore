import React,{useState} from 'react'
import Book from "../components/Book";
import {connect} from 'react-redux'
import {deleteBook, filterBook} from "../actions";
import defaults from "../utils/defaults";
import CategoryFilter from "../components/CategoryFilter";
import BooksForm from "./BooksForm";
import UserSignInForm from "../components/UserSignInForm";


const mapPropsToState = state =>{
    //console.log(state);
    const {books,token} = state.bookReducer;
    return{
        books,
        token,
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

const apiDeleteBook = async (id)=>{
    try {
        const response = fetch(defaults.apiBooks.delete(id),{
            method: 'DELETE',
        });
        return (await response).json()
    }
    catch (e) {
        return e
    }

}

const destroyBook = (props,id) => {
    props.deleteBook(id);
    apiDeleteBook(id).then(response =>{
        console.log(response)
    })
};

const listBooks = (books,props) => (
     books.map((book, index) => (
        <Book key={index}
              id={book.id}
              title={book.title}
              category={book.category}
              clickHandler={() => destroyBook(props,book.id)}/>
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
    if(1 === 2){

    }
        else{
            return (
                <div className={'w-90 pt-1'}>
                    <h6 className={'text-secondary text-left'}> FILTER BOOK</h6>
                    <CategoryFilter handleFilter={(option) => handleFilter(option, props)}/>
                    {displayBooks(props)}
                    <BooksForm/>
                </div>
            )
        }
})



