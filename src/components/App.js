import React from "react";
import BookList from "../containers/BookList";
import BooksForm from "../containers/BooksForm";
import "../App.css";
import UserSignUpForm from "./UserSignUpForm";
import UserSignInForm from "./UserSignInForm";
import NavBar from "./NavBar";
import Routes from "../config/Routes";

function App() {
  return (
    <div className="App bg-light ">
      <NavBar/>
      <div className="App-header">
          <Routes/>
      </div>
    </div>
  );
}

export default App;
