import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../Components/navbar/navbar'
import { FormContainer, SignupClose } from '../signup/signup.styled'
import { FormSignin } from './formsignin'


 const Signin = () => {
  const navigate=useNavigate()
  return (
    <>
    <Navbar/>
      <FormContainer>
        
        <SignupClose onClick={()=>navigate('/')}></SignupClose>
        
        <FormSignin/>
        
      </FormContainer>
      
    </>
  )
}
export default Signin
