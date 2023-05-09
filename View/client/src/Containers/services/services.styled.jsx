import { motion } from "framer-motion";
import styled from "styled-components";
import { Variable } from "../../Themes/globalVariables";

export const Service=styled.div`
width:100% ;
margin-top:2rem ;
z-index:-99;

`
export const ServiceHeadline=styled.h1`
text-align:center ;
Color:${(props)=>props.theme.secondaryColor};
font-size:4rem;
font-family: 'Cinzel', serif;
`

export const ServiceCards=styled.div`
display:flex;
align-items:center ;
z-index:-99;
justify-content:space-between;
margin:3rem 10rem ;
@media only screen and (max-width: ${Variable.mobile_width}){
    margin:1rem 0rem;
    flex-wrap:wrap ;
    justify-content:center ;
}
`
export const ServiceCard = styled(motion.div)`
  height: 250px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  

  // border:1px solid brown;
  position: relative;
  text-align: center;
  @media only screen and (max-width: ${Variable.mobile_width}) {
    height: 200px;
    width: 150px;
    margin: 0rem 1rem;
  }

  img {
    height: 100px;
    width: 100px;
    @media only screen and (max-width: ${Variable.mobile_width}) {
      height: 80px;
      width: 80px;
    }
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${(props) => props.theme.secondaryColor};
    margin-bottom: 3rem;
    @media only screen and (max-width: ${Variable.mobile_width}) {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  }
  p {
    font-size: 1rem;
    transform: translate(0rem, -3rem);
    font-weight:500 ;
    
    @media only screen and (max-width: ${Variable.mobile_width}) {
      font-size: 1.7rem;
      margin-top: 1.4rem;
    }
  }
`;

