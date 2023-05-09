import { createGlobalStyle } from "styled-components";
import { Variable } from "./globalVariables";

export const GlobalStyle=createGlobalStyle`


/* @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Roboto:ital,wght@1,300&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Italiana&display=swap"); */

/* @import url('https://fonts.googleapis.com/css2?family=New+Rocker&display=swap'); */

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}

html {
    font-size: 100%;

    @media only screen and (max-width: ${Variable.laptop_width}) {
        font-size: 80%;
    }

    @media only screen and (max-width: ${Variable.tablet_width}){
        font-size: 70%;
    }
    @media only screen and (max-width: ${Variable.mobile_width}){
        font-size: 60%;
    }
}


    

body {
    font-family: ${Variable.font_family};
    
    line-height: 1.5;
    
    

    background-color: ${(props)=>props.theme.bgColor};
    color: ${(props)=>props.theme.primaryColor};

    
}
a {
    text-decoration: none;
    color: unset;
}


button,
input {
    outline: 0;
}
button{
    cursor: pointer;
}

ul {
    list-style-type: none;
}

img {
    max-width: 100%;
}

iframe {
    border: 0;
}

`