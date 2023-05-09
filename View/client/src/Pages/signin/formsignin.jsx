import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormContentRight, FormInputButton, FormInputs, FormInputSignup } from '../signup/signup.styled';
export const FormSignin = () => {
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
    
  });

  const {email, password } = formData;

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const loginUser = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const { data } = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          ...formData,
        },
        { withCredentials: true }
        
      );
      if (data) {
        if (data.errors) {
          const {email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
          toast("Welcome to the shop!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
          });
        }
      }
    
    
    } catch (err) {
      console.log(err);
     
    }
  };

	
  return (
    <FormContentRight>
    <form onSubmit={loginUser} >
      <h1 style={{fontSize:'2rem'}}>
        Welcome Back
      </h1>
      <FormInputs>
        <label>Email</label>
        <input
          type='email'
          name='email'
          
          value={email}
          placeholder='Enter your email'
          onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          
         
        />
        
      </FormInputs>
      <FormInputs>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          name='password'
          value={password}
          type='password'
          onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          placeholder='Enter your password'
        />
        
      </FormInputs>
      
      
      <FormInputButton type='submit' value='login'>
        Sign in
      </FormInputButton>
      
      <FormInputSignup>
        
        Don't have an account? Sign up <Link to='/register'>here</Link>
      </FormInputSignup>
    </form>
  </FormContentRight>
  
  )
}
