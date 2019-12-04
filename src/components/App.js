import React from 'react';
import BookList from "../containers/BookList";
import BooksForm from "../containers/BooksForm";
import '../App.css';

function App() {
  return (
    <div className="App">
        <nav className={'page-bg d-flex align-items-center justify-content-between pl-5 main-nav mb-4 border-bottom'}>
            <ul className={'ul'}>
                <l1><h1>React Bookstore</h1></l1>
                <li>BOOKS</li>
                <li>GATEGORIES</li>
            </ul>

            <div className={'pr-5'}>
                <span className={'text-info'}>
                    <i className={'fa fa-lock'}> hello</i>
                </span>
            </div>
        </nav>

       <div className="App-header">
        <BookList/>
       <BooksForm/>
      </div>
    </div>
  );
}


export default App;
