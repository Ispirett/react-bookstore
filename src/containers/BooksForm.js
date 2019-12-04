import React, { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    addBook: value => dispatch(addBook(value))
  };
};

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
    props.addBook({
      id: Math.floor(Math.random() * 6),
      title,
      category: category === "" ? "Programming" : category
    });
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
