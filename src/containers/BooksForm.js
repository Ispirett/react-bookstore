import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions";
import defaults from "../utils/defaults";

const mapDispatchToProps = dispatch => {
  return {
    addBook: value => dispatch(addBook(value))
  };
};

const apiBooks = async () => {
    try {
        const response =  fetch(defaults.apiBooks.all)

        return (await response).json()
    }
    catch (e) {
        return  e
    }
}

const apiCreateBook = async (book) =>{
    try{
        const response = fetch(defaults.apiBooks.create,{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(book)
        });

        return (await response).json()

    }
    catch (e) {
        return e
    }
}


const options = () => {
    const optionsArray = [
        'Category','Programming','Comics','Action',
        'Biography', 'History','Horror', 'Kids',
        'Learning', 'Sci-Fi'
    ];
    return optionsArray.map((option, index)  => (
        <option key={index} value={option}>{option}</option>
    ))
};

export default connect(null,mapDispatchToProps) ((props) => {
    useEffect(()=>{
        apiBooks().then(books =>{
            books.forEach(book =>{
                props.addBook(book)
            })
        })

    },[]);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');

    const handleInput = (e) =>{
        if(e.target.name === "title"){
            setTitle(e.target.value);
        }
        else if(e.target.name === 'category'){
            setCategory(e.target.value);
        }
    };

  const handleSubmit = e => {
    e.preventDefault();
      apiCreateBook({ title,
             category: category === "" ? "Programming" : category}).then(response =>{
                 console.log(response)
      });

          apiBooks().then(books =>{
              books.forEach(book =>{
                  props.addBook(book)
              })
          })

  };

  return (
    <form acceptCharset={"UTF-8"} style={styles.form} className={"w-90"}>
      <h3 className={"text-left"}> Add new book</h3>
      <div className={"d-flex justify-content-between align-items-center "}>
        <input
          type={"text"}
          name={"title"}
          onChange={e => handleInput(e)}
          className="form-control book-input shadow-sm"
          placeholder={"Enter book title"}
          style={styles.textInput}
          required={true}
        />
        <select
          name={"category"}
          defaultValue={"programming"}
          onChange={e => handleInput(e)}
          className={"custom-select custom-select-sm mb-3 book-select shadow-sm "}
        >
            {options()}
        </select>

          <button className={"btn btn-info align-top shadow mt-n3"} onClick={e => handleSubmit(e)}>
                  add Book
          </button>

      </div>
    </form>
  );
});

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2em"
  },
  textInput: {
    outline: "none",
    marginBottom: "1em"
  }
};
