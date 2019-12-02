import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addBook} from  '../actions/index'

const mapDispatchToProps = dispatch => {
    return {
        addBook: (value) => dispatch(addBook(value))
    }
};

export default connect(null,mapDispatchToProps) ((props) => {

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState('');

    const handleInput = (e) =>{
        if(e.target.name === "title"){
            setTitle(e.target.value);
           // console.log(title);
        }
        else if(e.target.name === 'category'){
            setCategory(e.target.value);
           /// console.log(category)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBook(
            {id: Math.floor(Math.random() * 6),
                title,
                category
                  })
    };


    return( <form acceptCharset={'UTF-8'} style={styles.form}>
        <input
            type={'text'}
            name={'title'}
            onChange={(e) => handleInput(e)}
            className="form-control"
            placeholder={'Enter book title'}
            style={styles.textInput}
            required={true}
        />

        <select name={"category"} onChange={(e) => handleInput(e)} className={"custom-select custom-select-sm"}>
            <option  value={'Programming'}>programming</option>
            <option value={'Comics'}>comics</option>
            <option value={'Action'}>Action</option>
            <option value={"Biography"}>Biography</option>
            <option value={"History"}>History</option>
            <option value={"Horror"}>Horror</option>
            <option value={"Kids"}>Kids</option>
            <option value={"Learning"}>Learning</option>
            <option value={"Sci-Fi"}>Sci-Fi</option>
        </select>
        <button onClick={(e) => handleSubmit(e)}> add Book </button>
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