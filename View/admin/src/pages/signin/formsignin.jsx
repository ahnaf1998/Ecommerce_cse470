import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from "../../redux/apiCalls";
import { FormContentRight, FormInputButton, FormInputs } from './signup.styled';


export const FormSignin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const adminLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <FormContentRight>
    <form onSubmit={adminLogin}>
      <h1 style={{fontSize:'2rem'}}>
        Welcome Back
      </h1>
      <FormInputs>
        <label>Username</label>
        <input
          
          type='text'
          value={username}
          placeholder='Enter your username'
          onChange={(e) => setUsername(e.target.value)}
          
         
        />
        
      </FormInputs>
      <FormInputs>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
        />
        
      </FormInputs>
      
      <FormInputButton>
        Sign in
      </FormInputButton>
      
    </form>
  </FormContentRight>
  
  )
}
