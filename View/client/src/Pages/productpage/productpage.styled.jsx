import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Variable } from '../../Themes/globalVariables';


export const Wrapper = styled.div`
  padding: 20px 50px;
  display: flex;
  align-items:center ;
  justify-content:space-between ;
  @media only screen and (max-width: ${Variable.mobile_width}){
       padding: 10px;
       flex-direction:column 
       }
`;

export const ImgContainer = styled(motion.div)`
  width:40% ;
  border-radius:150px 150px 0px 0px;
  overflow:hidden ;
  
  
`;

export const Image = styled.img`
  width: 800px;
  height: 600px;
  object-fit: cover;
  
 
  @media only screen and (max-width: ${Variable.mobile_width}){ height: 40vh ;
    
  }
`;

export const InfoContainer = styled(motion.div)`
  width:60%;
  padding: 50px 150px;
  @media only screen and (max-width: ${Variable.mobile_width}){ padding: 10px }
`;

export const Title = styled.h1`
  font-weight: bolder;
  font-size:4.5rem;
  color:${(props)=>props.theme.secondaryColor} ;
  font-family: 'Cinzel', serif; ;
`;

export const Category = styled.p`
  font-weight: 500;
  font-size: 1rem;
  span {
    font-weight: 700;
  }
`;
export const Desc = styled.p`
  margin: 10px 0px;
  color: ${(props) => props.theme.accentColor};
  padding-bottom: 50px;
  font-weight: 500;
  span {
    font-weight: 700;
  }
`;

export const Price = styled.span`
  font-weight: 50;
  font-size: 3rem;
  span{
    font-weight:700 ;
  }
`;



export const FilterSize = styled.select`
  margin-left: 8px;

  padding: 5px;
  color:${(props)=>props.theme.accentColor};
  background-color:${(props)=>props.theme.secondaryColor}
`


export const AddContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:50px ;
  column-gap:2rem ;
  @media only screen and (max-width: ${Variable.mobile_width}){ width: 100% }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between ;
  font-weight: 700;
  cursor: pointer;
`;

export const Amount = styled.span`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  /* border: 1px solid teal; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 15px;
  background-color:${(props)=>props.theme.secondaryColor};
  color:${(props)=>props.theme.accentColor}
`;

export const Button = styled.button`
  padding: 15px;
  border-radius:20px ;
  border: 2px solid ${(props)=>props.theme.buttonColor};
  color:${(props)=>props.theme.accentColor};
  background-color:${(props)=>props.theme.buttonColor};
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
      color:${(props)=>props.theme.buttonColor};
  }
`;