import { motion } from "framer-motion";
import styled from "styled-components";
import { Variable } from "../../Themes/globalVariables";

export const ProductContainer=styled.div`
display:flex ;
flex-direction:column ;
/* align-items:center ;  */

hr{
  margin-top:-1rem ;
  margin-left:12rem ;
  margin-right:12rem ;
  border:1px solid ${(props)=>props.theme.buttonColor};
  @media only screen and (max-width: ${Variable.mobile_width}){
    margin:-1rem 6rem
  }

  
}
`

export const ProductHeader=styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:start ;
text-align:center ;

h2{
  font-size:3rem ;
  color:${(props)=>props.theme.secondaryColor} ;
  font-family: 'Dancing Script', cursive; ;
  font-weight:bolder ;
  br{
    display:none ;
    @media only screen and (max-width: ${Variable.mobile_width}){
      display:block;
    }

  }
}
p{
  font-size: 0.8rem;
}
`


export const ProductFilter=styled.div`
display:flex ;

align-items:center ;
justify-content:space-evenly ;
margin: 2rem 20rem;




@media only screen and (max-width: ${Variable.mobile_width}){
  margin: 2rem;
}



`

export const Filter=styled.button`

  background:none ;
  border:none ;
  color:${(props)=>props.theme.primaryColor} ;
  font-size:1rem ;
  font-weight:bold ;
  padding:0.5rem ;
  transition:1s ;
  
  &.active{
    border-bottom:2px solid ${(props)=>props.theme.buttonColor};
    transition:1s ;
  }



`
export const ProductItems=styled(motion.div)`
display:flex ;
align-items:center ;
justify-content:space-evenly ;
flex-wrap:wrap ;
margin:3rem 10rem;
`
