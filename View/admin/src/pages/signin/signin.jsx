import React from 'react'
import formImage2 from '../../assets/formimage2.jpg'
import { FormSignin } from './formsignin'
import { FormContainer, FormContentLeft, SignupClose } from './signup.styled'

export const Signin = () => {
  return (
    <>
      <FormContainer>
        <SignupClose></SignupClose>
        <FormContentLeft>
          <img src={formImage2} alt='' />
        </FormContentLeft>
        <FormSignin/>
        
      </FormContainer>
    </>
  )
}
