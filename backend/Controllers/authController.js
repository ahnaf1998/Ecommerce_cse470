const User = require("../Models/user");

const jwt = require("jsonwebtoken");



const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SEC, {
    expiresIn: '3d',
  });
};

const handleErrors = (err) => {
  let errors = {username:"", email:"", password:"" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email or Username is already registered";
    return errors;
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      
    });
  }

  return errors;
};



//register user
const registerUser = async (req, res,next) => {
 try {
  const{username,email,password}=req.body
  const user=await User.create({username,email,password})
  const token = createToken(user._id);

  res.cookie("jwt", token, {
    withCredentials: true,
    httpOnly: false,
    
    
  });


  res.status(201).json({ user: user._id,token, created: true });


 } catch (err) {
  console.log(err);
  const errors = handleErrors(err);
  res.json({ errors, created: false });
   
 }
}
  


//login
const loginUser = async (req, res,next) => {
  try {
    const{email,password}=req.body
    const user=await User.login(email,password)
    const token = createToken(user._id);
  
    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      
      
    });
  
  
    res.status(200).json({ user: user._id,created: true });
  
  
   } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
     
   }

}


module.exports = {
  registerUser,
  loginUser,
}
