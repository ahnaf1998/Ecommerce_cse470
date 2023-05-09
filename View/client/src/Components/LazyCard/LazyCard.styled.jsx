import styled, { keyframes } from 'styled-components';
import { Variable } from "../../Themes/globalVariables";

const Skeleton=styled(keyframes)`
to{
      opacity: 0.5;
    }

`
export const Card=styled.div`
height:250px ;
width:200px ;
background-color: #181414a4;
opacity:0.5;
padding:0.7rem 0.2rem 0.5rem 0.8rem;
/* z-index:-9; */

border-radius:20px ;
display:flex ;
flex-direction:column ;
align-items:flex-start ;
justify-content:space-between ;
position: relative;
/* transition: all .2s; */
margin:1.5rem 3rem;
animation: ${Skeleton} 1s ease infinite alternate;



@media only screen and (max-width: ${Variable.mobile_width}){
    height:150px ;
    width:120px ;

}
`
export const FoodImage=styled.div`
height:70% ;
width:95% ;
border-radius:10px ;
background-color: #313131;



`
export const CardHead=styled.div`
margin-top:0.4rem ;
background-color: #313131;
height:25px ;
width:100px;

`

export const CardBottom=styled.div`
display:flex ;
align-items:center ;
justify-content:space-between ;
width:95%;
height:20% ;

`

export const Price=styled.div`
height:30px ;
width:50px;
background-color: #313131;

`
export const Button=styled.div`
height:30px ;
width:80px;
background-color: #313131;

`
  

  
  