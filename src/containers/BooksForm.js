import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addBook} from '../actions'

const mapDispatchToProps = dispatch => {
    return {
        addBook: (value) => dispatch(addBook(value))
    }
};

const options = () => {
    const optionsArray = [
        'Category','Programming','Comics','Action',
        'Biography', 'History','Horror', 'Kids',
        'Learning', 'Sci-Fi'
    ];
    return optionsArray.map(option  => (
        <option value={option}>{option}</option>
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

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBook(
            {id: Math.floor(Math.random() * 6),
                title,
                category: category === ''? 'Programming': category
      })
    };


    return( <form acceptCharset={'UTF-8'} style={styles.form}>
        <h1> Add new book</h1>
        <input
            type={'text'}
            name={'title'}
            onChange={(e) => handleInput(e)}
            className="form-control"
            placeholder={'Enter book title'}
            style={styles.textInput}
            required={true}
        />

        <select name={"category"}
                defaultValue={'programming'}
                onChange={(e) => handleInput(e)}
                className={"custom-select custom-select-sm mb-3"}>
        {options()}
        </select>
        <button className={'btn btn-info'} onClick={(e) => handleSubmit(e)}> add Book </button>
    </form>)
})

const styles = {
    form:{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2em'
    },
    textInput: {
        borderRadius: '1em',
        outline: 'none',
        marginBottom: '1em',
    }
};