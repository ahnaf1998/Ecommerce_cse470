import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Variable } from '../../Themes/globalVariables';

export const Navbars=styled.div`

display:flex ;
align-items:center ;
justify-content:space-between;



`

export const Navlogo=styled(motion.div)`
display: flex;
align-items:center ;
justify-content:flex-start ; 
@media only screen and (max-width: ${Variable.mobile_width}){
        flex-direction:column ;
      }



`

export const Brandname=styled(Link)`
 font-family: 'Dancing Script', cursive;
 font-weight:bolder ;
 font-size:2rem ;
 margin-left:0.8rem ;
 
 @media only screen and (max-width: ${Variable.tablet_width}){
        font-size:2.5rem ;
      }
`
export const Nav=styled.nav`



`
export const NavItems=styled.ul`
display:flex ;
align-items:center ;
justify-content:center;
margin-right:5rem ; 

@media only screen and (max-width: ${Variable.mobile_width}) {

position: fixed;
inset: 0 0 0 50%;
flex-direction: column;
align-items:center ;
justify-content:center ;

margin-right: 0rem ;
background-color:brown;

transform: ${({dataVisible})=>(dataVisible? 'translateX(100%)':'translateX(0%)')};
transition: transform 1s ease-in-out;
}

`
export const NavList=styled(motion.li)`
font-size:1rem ;
margin-left:min(2vw,2rem);
height:1.8rem ;
font-weight:bold ;

position: relative;
@media only screen and (max-width: ${Variable.tablet_width}){
        font-size:1.3rem;
      }
 @media only screen and (max-width: ${Variable.mobile_width}){
  color:${(props)=>props.theme.primaryColor};
  font-size: clamp(3rem,10vw,0.2rem);
  padding-bottom: 3.8rem; 
  height:1.5rem;
      }



&::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        transition: width 0.5s ease;
        height: 2px;
        background-color: ${(props)=>props.theme.buttonColor};
      }
      
  &:hover::after {
        width: 100%;
        
      }


`


export const Navright=styled(motion.div)`
display:flex ;
align-items:center ;
justify-content:flex-end;
margin-right:min(2vw,4rem) ;
@media only screen and (max-width: ${Variable.mobile_width}){
        margin-right:6rem ;
        visibility:${({dataVisible})=>(dataVisible? 'visible':'hidden')} ;
      }
`
export const NavButton = styled.button`
  height: 2rem;
  width: 5rem;

  border-radius: ${Variable.border_radius};
  background-color: ${(props) => props.theme.buttonColor};
  color: ${Variable.white};
  border: none;
  &:hover {
    border: 2px solid ${(props) => props.theme.buttonColor};
    background: none;
    color: ${(props) => props.theme.buttonColor};
  }
  @media only screen and (max-width: ${Variable.tablet_width}) {
    width: 5.5rem;
    height: 2.5rem;
  }
  @media only screen and (max-width: ${Variable.mobile_width}) {
    width: 7rem;
    height: 3rem;
  }
`;
export const NavCart=styled(HiOutlineShoppingCart)`
margin-left:1rem ;
font-size:1.5rem ;
cursor: pointer;
@media only screen and (max-width: ${Variable.tablet_width}){
        font-size:1.3rem ;
      }
@media only screen and (max-width: ${Variable.mobile_width}){
        font-size:1.7rem ;
      }
`
export const NavFav=styled(MdFavoriteBorder)`
margin-left:1rem ;
font-size:1.5rem ;
@media only screen and (max-width: ${Variable.tablet_width}){
        font-size:1.3rem ;
      }
@media only screen and (max-width: ${Variable.mobile_width}){
        font-size:1.7rem ;
      }

`
export const StyledMenuButton=styled.div`
   
    
    /* color:black; */
    border: none;
    display:none ;
    
    z-index:999 ;
    position:absolute ;
    top: 3.5rem;
    right: 1rem;
    height: 40px;
    width: 40px;
    cursor: pointer;
    transition: transfrom 3s ease-in-out;
    
   
    cursor: pointer;
    @media only screen and (max-width: ${Variable.mobile_width}){
      display:block ;
    }
    
    
    `
   export const MenuButton = styled(GiHamburgerMenu)`
     height: 30px;
     width: 30px;
     color: ${(props) => props.theme.buttonColor};
     
   `;
  
   
   export const CloseButton=styled(AiOutlineClose)`
   height: 30px;
   width:30px;
   z-index:999 ;
   color:${Variable.white} ; 
   
  
   `