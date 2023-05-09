import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Variable } from '../../Themes/globalVariables'
export const Containers=styled.div`
padding:0 3rem ;
display :flex ;
justify-content:space-between ;
position:relative ;

@media only screen and (max-width: ${Variable.mobile_width}){
  width:100% ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  margin:1rem ;
  

  /* margin:auto;
  max-width:80% ; */
  


}
`
export const Headline=styled(motion.div)`
position: relative;
width:60% ;
margin-top: 7rem;

@media only screen and (max-width: ${Variable.mobile_width}){
  margin:auto ;
  width:100%;
  
  text-align:center

}


`
export const Heading = styled.h1`
  position: relative;
  font-size: clamp(6rem, 10vw, 4rem);
  
  /* letter-spacing: 0.6rem; */
  line-height: 6rem;
  font-family: "Italiana", serif;

  @media only screen and (max-width: ${Variable.laptop_width}) {
    font-size: 4rem;
  }
  @media only screen and (max-width: ${Variable.mobile_width}) {
    font-size: 3rem;
    margin-top: 1.5rem;
    line-height: 3.5rem;
    

   
  }
`;
export const StyledHomeButton=styled.button`
 width: 6.5em;
 height: 2.3em;
 margin:2rem 1rem ;

 background: ${(props)=>props.theme.buttonColor};
 color: ${Variable.white};
 border: none;
 border-radius: ${Variable.border_radius};
 font-size: 20px;
 font-weight: bold;
 cursor: pointer;
 position: relative;
 z-index: 1;
 overflow: hidden;
 @media only screen and (max-width: ${Variable.mobile_width})
{

  
}

&:hover {
 color:  ${(props)=>props.theme.buttonColor};
 border:1px solid ${(props)=>props.theme.buttonColor}
}

&:after {
 content: "";
 background: white;
 position: absolute;
 z-index: -1;
 left: -20%;
 right: -20%;
 top: 0;
 bottom: 0;
 transform: skewX(-45deg) scale(0, 1);
 transition: all 0.5s;
}

&:hover:after {
 transform: skewX(-45deg) scale(1, 1);
 -webkit-transition: all 0.5s;
 transition: all 0.5s;
}
`




export const ExtraInfo=styled(motion.div)`
width:40% ;


@media only screen and (max-width: ${Variable.laptop_width}){
  transform:translate(-30px) ;
}
@media only screen and (max-width: ${Variable.mobile_width}){
  
  width:100% ;
}
`




export const Image4=styled.img`

margin-right:2rem; 
margin-top: 2.5rem; 
border-radius:30px 30px 0px 30px ;

`