
import { Navbar } from '../../Components/navbar/navbar';
import FormSignup from './formsignup';
import { FormContainer, SignupClose } from './signup.styled';




const Signup = () => { ;
  return (
    <>
    <Navbar/>
      <FormContainer>
        <SignupClose></SignupClose>
        
       
        <FormSignup  />
        
        
      </FormContainer>
      
    </>
  );
};
export default Signup



