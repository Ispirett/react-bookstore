import React from 'react';
import BookList from "./components/BookList";
import BooksForm from "./components/BooksForm";
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>React Bookstore </h1>
       <div className="App-header">
        <BooksForm/>
        <BookList/>

      </div>

    </div>
  );
}

export default App;
