import React from 'react'
import { Footer } from '../../Components/Footer/footer'
import { Container } from '../../Themes/globalComponents.styled'
import { ContactContainer, InputRow, NewsLetter } from './contactus.styled'


export const Contactus = () => {
  return (
    <>
    <Container id='contactus'>
        <ContactContainer>
            <h1>Contact us</h1>
            <NewsLetter>
                <h2>Subscribe to our Newsletter</h2>
                <p>And Never Miss Latest Update</p>
                <InputRow>
                    <input placeholder='Enter your email address'/>
                    <button>Subscribe</button>
                
                </InputRow>

            </NewsLetter>
            <Footer/>
            
        </ContactContainer>
    </Container>
    </>
  )
}
