import React, { useState, useEffect } from "react";

// Create user sign up form
// field username email password password confirmation
// manage state in temp fields
// api
const apiSignUp = async userInfo => {
  try {
    const response = await fetch(
      "http://api-bookstore-tt.herokuapp.com/users/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo)
      }
    );
    return await response.json();
  } catch (e) {}
};

export default () => {
  const handleChange = e => {

    if (e.target.name === "email") {
      setFormDetails({...formDetails, ['email']:  e.target.value });
    } else if (e.target.name === "username") {
      setFormDetails({...formDetails, ['username']: e.target.value });
    } else if (e.target.name === "password") {
      setFormDetails({...formDetails ,['password']: e.target.value });
    }
    else if(e.target.name === 'password_confirmation'){
        setFormDetails({...formDetails, ['password_confirmation']: e.target.value });
    }
    console.table(formDetails);
  };

  // useEffect(()=>{
  //
  // },[]);
  const handleSubmit = (e) => {
      e.preventDefault()
    const userInfo = {
      username: formDetails.username,
      email: formDetails.email,
      password: formDetails.password,
      password_confirmation: formDetails.passwordConfirm
    };

      console.log(userInfo)
      apiSignUp(userInfo).then(response => {
        setToken(response)
      console.log(response,token);
    });
  };

  const [formDetails, setFormDetails] = useState({

  });
  const [token, setToken] = useState('');
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        name="username"
        placeholder="enter username"
        onChange={e => handleChange(e)}
        style={{ marginBottom: "1em" }}
      />

      <input
        type="email"
        name="email"
        placeholder="enter email"
        onChange={e => handleChange(e)}
        style={{ marginBottom: "1em" }}
      />

      <input
        type="password"
        name="password"
        placeholder="enter password"
        onChange={e => handleChange(e)}
        style={{ marginBottom: "1em" }}
      />
      <input
        type="password"
        name="password_confirmation"
        placeholder="confirm password"
        onChange={e => handleChange(e)}
        style={{ marginBottom: "1em" }}
      />

      <button> submit </button>
    </form>
  );
};
