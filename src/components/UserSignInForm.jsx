import React, {Fragment, useState} from 'react'
import defaults from "../utils/defaults";
import {connect} from "react-redux";
import { authenticate} from '../actions';
import BookList from "../containers/BookList";


const mapDispatchToProps = dispatch => {
    return{authenticate: (token) => dispatch(authenticate(token))};
};


const signInApi = async (payload) =>{
    try{
        const response = await fetch('http://api-bookstore-tt.herokuapp.com/auth/login',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
        });
        return await response.json()
    }
    catch (e) {

    }
};


export default connect(null,mapDispatchToProps) ((props,{push,history}) =>{

    const [token, setToken] = useState('');
    const [formDetails, setFormDetails] = useState({});

    const handleChange = (e) =>{
        if(e.target.name === 'username'){
            setFormDetails({...formDetails, ["username"]:e.target.value})
        }
        else if(e.target.name === 'password'){
            setFormDetails({...formDetails, ["password"]: e.target.value})
        }
    };
    const alert = () =>{
        console.log(token)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: formDetails.username,
            password: formDetails.password
        };

        signInApi(data).then(response =>{
            console.log(response);
            setToken(response.token);
            authenticate(response.token)
            props.push('/books',token)
        });


    };

    return(
        <Fragment>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input type="text" name={"username"} onChange={(e => handleChange(e))} placeholder={"enter username"}/>
                <input type='text' name={'password'} onChange={(e => handleChange(e))} placeholder={'enter password'}/>
                <button> Submit </button>
            </form>

            <button onClick={() => alert()}>token</button>
        </Fragment>


    )

})