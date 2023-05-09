import styled, { keyframes } from 'styled-components'

export const Container=styled.div`
display:flex ;
align-items:center ;
justify-content:center ;
height:100vh ;

`
const SpinAnimation=keyframes`
0%{
    transform:rotate(0)
}
50%{
    transform:rotate(180degree);
    border-top-color:#fc4182;
    border-bottom-color:#80ffdb;
    border-right-color:transparent;
    border-left-color:transparent;
}
100%{
    transform:rotate(360degree)
}
`
export const Spinner=styled.span`
width:9rem;
height:9rem ;
display:inline-block ;
border:5px solid #cc00ff;
border-top-color:transparent;
border-bottom-color:transparent;
border-radius:50% ;
animation:${SpinAnimation} 1s infinite ;



`