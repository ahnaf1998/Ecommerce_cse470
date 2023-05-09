import styled from 'styled-components'
import { Variable } from '../../Themes/globalVariables'


export const ShopContainer=styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;

    
`

export const ShopHeader=styled.div`
text-align:center ;

h1{
    font-size:3.5rem;
    color:${(props)=>props.theme.secondaryColor};
    font-family: 'Cinzel', serif;
}
p{
  font-weight:500 ;
}
    
`

export const ShopItems=styled.div`
display:flex ;
align-items:center ;
justify-content:space-evenly ;
flex-wrap:wrap ;
margin:3rem 10rem;
@media only screen and (max-width: ${Variable.mobile_width}){
  margin: 0rem;
}
@media only screen and (max-width: ${Variable.tablet_width}){
  margin: 0rem;
}

`
export const ShowAllButton=styled.a`

 padding: 0.8em 1.75em;
 background-color: transparent;
 border-radius: 6px;
 border: 1px solid ${(props)=>props.theme.buttonColor};
 transition: .5s;
 position: relative;
 overflow: hidden;
 cursor: pointer;
 z-index: 1;
 font-weight: 600;
 font-size: 1.2rem;
 
 
 color:${(props)=>props.theme.buttonColor};

&::after,
&::before {
 content: '';
 display: block;
 height: 100%;
 width: 100%;
 transform: skew(90deg) translate(-50%, -50%);
 position: absolute;
 inset: 50%;
 left: 25%;
 z-index: -1;
 transition: .5s ease-out;
 background-color: ${(props)=>props.theme.buttonColor};
}
&::before {
 top: -50%;
 left: -25%;
 transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

&:hover::before {
 transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

&:hover::after {
 transform: skew(45deg) translate(-50%, -50%);
}

&:hover {
 color: ${(props)=>props.theme.accentColor};
}

&:active {
 filter: brightness(.7);
 transform: scale(.98);
}
`

