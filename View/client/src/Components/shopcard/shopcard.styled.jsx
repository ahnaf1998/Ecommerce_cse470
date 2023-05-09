import { motion } from "framer-motion";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import styled from 'styled-components';
import { Variable } from "../../Themes/globalVariables";

export const Card = styled(motion.div)`
  height: 250px;
  width: 200px;
  background-color: #c7bfbf;
  padding: 0.7rem 0.2rem 0.5rem 0.8rem;
  /* z-index:-9;  */

  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  transition: all 0.2s;
  box-shadow: 6px 6px 10px 2px black;
  margin: 1.5rem 3rem;

  &:hover {
    box-shadow: -6px 6px 10px -2px black;
  }

  @media only screen and (max-width: ${Variable.mobile_width}) {
    height: 150px;
    width: 120px;
  }
`;
export const CardImage=styled.img`
height:70% ;
width:95% ;
border-radius:10px ;
object-fit:cover ;


`
export const FavButton=styled.div`
transition: transfrom 3s ease-in-out; ;


z-index:99 ;
position: absolute;
cursor: pointer;
right:1rem ;
top:1rem;

@media only screen and (max-width: ${Variable.mobile_width}){
    right:2rem ;
}


`
export const Fav=styled(MdOutlineFavoriteBorder)`



color:${(props)=>props.theme.buttonColor}  ;
font-size:1.7rem ;

@media only screen and (max-width: ${Variable.mobile_width}){
   font-size:2rem ;
}




`
export const UnFav=styled(MdOutlineFavorite)`
font-size:1.7rem ;
color:${(props)=>props.theme.buttonColor}  ;
@media only screen and (max-width: ${Variable.mobile_width}){
   font-size:2rem ;
}

`

export const CardHead=styled.h2`
color:${(props)=>props.theme.accentColor};
font-size:0.8rem ;
margin-top:0.5rem ;
`
export const CardBottom = styled.div`
  width: 95%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
  }
  h3 span {
    font-weight: 500;
    font-size: 0.9rem;
  }

  button {
    height: 2rem;
    width: 5rem;
    border: none;
    background-color: ${(props) => props.theme.secondaryColor};
    border-radius: 10px;
    color: white;
    cursor: pointer;
    @media only screen and (max-width: ${Variable.mobile_width}) {
      font-size: 0.8rem;
      height: 80%;
      &::hover {
        color: none;
        border-color: ${(props) => props.theme.secondaryColor};
      }
    }
  }
`;