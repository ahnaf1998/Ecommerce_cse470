import { motion } from "framer-motion";
import styled from "styled-components";
import { Variable } from "../../Themes/globalVariables";

export const AboutContainer=styled.div`
max-width:100% ;

margin:5rem 8rem ;
display:flex ;
align-items:flex-start ;
justify-content:space-between ;
@media only screen and (max-width: ${Variable.laptop_width}){
        margin:4rem 5rem ;
    }
@media only screen and (max-width: ${Variable.tablet_width}){
         margin:4rem 4rem ;
    }
 @media only screen and (max-width: ${Variable.mobile_width}){
         flex-direction:column ;
         align-items:center ;
         margin:3rem 1rem;
         justify-content:space-between ;
         text-align:center;
    }


`

export const AboutImage=styled(motion.div)`

img{

    height:500px ;
    width:350px ;
    object-fit:cover ;
    border-radius:100px 100px 0px 0px ;
    box-shadow:12px 12px 20px 4px black ;

    @media only screen and (max-width: ${Variable.laptop_width}){
         height:450px ;
         width:300px ;
    }
    @media only screen and (max-width: ${Variable.tablet_width}){
         height:300px ;
         width:200px ;
    }
    @media only screen and (max-width: ${Variable.tablet_width}){
         height:300px ;
         width:200px ;
    }
}
`
export const AboutDetail=styled(motion.div)`
display:flex ;
flex-direction:column ;
justify-content:space-between ;
align-items:flex-start ;
margin-top:3rem ;
margin-left: 2rem;
width:50%;
@media only screen and (max-width: ${Variable.laptop_width}){
         margin-left:1rem;
    }
    @media only screen and (max-width: ${Variable.tablet_width}){
         margin-left:2rem;
         margin-top:1rem ;
          
    }
    @media only screen and (max-width: ${Variable.mobile_width}){
         margin-left:1rem;
         margin-top:3rem ;
         width:80% ;
        
    }
    
h2{
    font-size:3.4rem ;
    font-family: 'Cinzel', serif;
    color:${(props)=>props.theme.secondaryColor};
    font-weight:bolder ;
    line-height:3.5rem ;
    @media only screen and (max-width: ${Variable.tablet_width}){
         font-size:2.5rem ;
    }
    @media only screen and (max-width: ${Variable.mobile_width}){
         
         font-size:3rem ;
         line-height:4rem ;
        
    }
    &:nth-child(2){
         align-self: center;
    }
}

p{
    text-align:center ;
     margin-top:2rem ;
    font-size:0.8rem ;
    font-weight:500 ;
    @media only screen and (max-width: ${Variable.laptop_width}){
         font-size:1rem;
    }
    @media only screen and (max-width: ${Variable.tablet_width}){
        font-size:0.8rem ;
    }
    @media only screen and (max-width: ${Variable.mobile_width}){
         
         font-size:1.3rem ;
         
        
    }

   
}
h3{
    margin-top:3rem ;
   
    font-size:2.2rem ;
    word-spacing:0.2rem;
    text-align:center ;
    font-family: 'Send Flowers', cursive;
    color:${(props)=>props.theme.secondaryColor};
    @media only screen and (max-width: ${Variable.laptop_width}){
         font-size: 2.5rem;
    }
    @media only screen and (max-width: ${Variable.tablet_width}){
         font-size:2rem;
    }
    @media only screen and (max-width: ${Variable.mobile_width}){
         
         font-size:3rem ;
        
        
    }
}


`