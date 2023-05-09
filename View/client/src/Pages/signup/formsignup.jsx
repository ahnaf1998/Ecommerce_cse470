import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {

  FormContentRight,
  FormInputButton,
  FormInputLogin,
  FormInputs
} from "./signup.styled";

const FormSignup = () => {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    
  });

  const { username, email, password, password2 } = formData;

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const registerUser = async (e) => {
    e.preventDefault();
    // console.log(formData);
    try {
      if(password!==password2){
        generateError("Password doesn't match")

      }
      else{
      const { data } = await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          ...formData,
        },
        { withCredentials: true }
        
      );
      if (data) {
        if (data.errors) {
          const { username,email, password } = data.errors;
          if (username) generateError(username);
          else if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
          toast("Welcome to the shop !", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
          });
        }
      }
    }
    
    } catch (err) {
      console.log(err);
     
    }
  };
  

  return (
    <FormContentRight>
      <form onSubmit={registerUser}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <FormInputs>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          />
        </FormInputs>
        <FormInputs>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          />
        </FormInputs>
        <FormInputs>
          <label className="form-label">New Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          />
        </FormInputs>
        <FormInputs>
          <label className="form-label">Confirm Password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirm your password"
            value={password2}
            onChange={(e)=>setFormData({...formData,[e.target.name]:e.target.value})}
          />
        </FormInputs>
        
       

        <FormInputButton type="submit">Sign up</FormInputButton>
        <FormInputLogin>
          Already have an account? Login <Link to="/login">here</Link>
        </FormInputLogin>
      </form>
    </FormContentRight>
  );
};

export default FormSignup;
