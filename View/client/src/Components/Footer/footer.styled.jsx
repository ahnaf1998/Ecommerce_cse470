import styled from "styled-components"
import { Variable } from "../../Themes/globalVariables"

export const FooterContainer=styled.div`
display:flex ;
flex-direction:column ;
align-items:center ;
/* justify-content:space-around ; */
text-align:center ;
   
`




export const ContactDetails=styled.div`
display:flex ;
/* justify-content:space-between ; */
align-items:center ;
/* flex-wrap:wrap ;  */
text-align:center ;
margin:2rem ;
@media only screen and (max-width: ${Variable.mobile_width}){
       margin:3rem 0rem ;
        
    }

`

export const PersonalInfo=styled.div`
margin-right:8rem ;
@media only screen and (max-width: ${Variable.mobile_width}){
        
        margin-right:2rem ;
    }


h4{
   color:${(props)=>props.theme.accentColor} ;
   font-size:1.2rem ;
   font-family: 'Cinzel', serif;
}
p{
    font-size: 0.8rem; 
}
address{
    font-size: 0.8rem;
}
`
export const ContactLink=styled.div`
margin-right:14rem ;
@media only screen and (max-width: ${Variable.mobile_width}){
        
        margin-right:2rem ;
    }

h2{
    color:${(props)=>props.theme.secondaryColor} ;
   font-size:1.8rem ;
   font-family: 'Cinzel', serif;
}
p{
    color:${(props)=>props.theme.accentColor} ;
    font-size:0.8rem ;
}

`

export const LinkIcon=styled.div`
margin-top: 1rem;
a{
    font-size:1.5rem ;
    margin-right:1rem ;
    color:${(props)=>props.theme.secondaryColor};
}
`

export const WorkingHour=styled.div`

h2{
    font-size:1.4rem ; 
    color:${(props)=>props.theme.accentColor};
    font-family: 'Cinzel', serif;
    @media only screen and (max-width: ${Variable.mobile_width}){
        font-size:1rem
    }

}
span{
    font-size:1rem ; 
}

`