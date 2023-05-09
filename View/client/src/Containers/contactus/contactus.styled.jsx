import styled from 'styled-components';
import { Variable } from '../../Themes/globalVariables';

export const ContactContainer=styled.div`
 width:100%;
 height: 100vh;
 text-align:center ;
 display:flex ;
 flex-direction:column ;
 align-items:center ;
 margin-top:1rem ;

 @media only screen and (max-width: ${Variable.tablet_width}){
     margin:2rem;
 }
 @media only screen and (max-width: ${Variable.mobile_width}){
     margin-top:2rem ;
     

 }
 h1{
     font-size:4rem ;
     font-family: 'Cinzel', serif;
     font-weight:bolder;
     color:${(props)=>props.theme.secondaryColor} ;
 }
 
`

export const NewsLetter = styled.div`
  height: 30%;
  width: 50%;
  background-color: #eccbc1;
  box-shadow: 12px 12px 15px 1px black;

  padding: 1rem 3rem;

  @media only screen and (max-width: ${Variable.mobile_width}) {
    width: 70%;
  }
  h2 {
    font-size: 2rem;
    font-family: "Cinzel", serif;
    @media only screen and (max-width: ${Variable.mobile_width}) {
      font-size: 2.4rem;
    }
  }
  p {
    font-size: 0.8rem;
    color: ${(props) => props.theme.accentColor};
    @media only screen and (max-width: ${Variable.mobile_width}) {
      font-size: 1rem;
    }
  }
`;
export const InputRow = styled.div`
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${Variable.mobile_width}) {
    margin-bottom: 1rem;
  }

  input {
    background: none;
    border: 1px solid ${(props) => props.theme.primaryColor};
    width: 25rem;
    padding: 0.4rem 1rem;
    color: ${(props) => props.theme.accentColor};
    @media only screen and (max-width: ${Variable.mobile_width}) {
      width: 10rem;
    }
  }

  button {
    margin-left: 2rem;
    padding: 0.3rem 0.8rem;
    background-color: ${(props) => props.theme.accentColor};
    color: white;
    border: none;
    font-family: "Cinzel", serif;
    font-weight: bold;
    @media only screen and (max-width: ${Variable.mobile_width}) {
      padding: 0rem;
    }
  }
`;

