import { motion } from "framer-motion";
import styled from "styled-components";
import { Variable } from "../../Themes/globalVariables";

export const CartContainer = styled.div`
  padding: 10px 20px;
  @media only screen and (max-width: ${Variable.mobile_width}){ 
    padding: 10px 
  }
`;
export const Title = styled(motion.h1)`
  font-weight: 300;
  text-align: center;
  font-size:3rem ;
  font-family: 'Cinzel', serif;
  color:${(props)=>props.theme.secondaryColor};
`;

export const Top = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.button`
padding: 15px 25px;
 border:none;
 border-radius: 15px;
 color: white;
 z-index: 1;
 background: ${(props)=>props.theme.buttonColor}; 
 position: relative;
 font-weight: 1000;
 font-size: 1rem;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;


&::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

&:hover {
 color: #e8e8e8;
}

&:hover::before {
 width: 100%;
}

`;

export const TopTexts = styled.div`
  @media only screen and (max-width: ${Variable.mobile_width}){ display: none 
  }
`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${Variable.mobile_width}){ flexDirection: column }
  
`;

export const Info = styled.div`
  flex: 3;
  display:flex ;
  flex-direction:column ;
  justify-content:space-between ;
  margin-right:2rem ;


`;

export const Product = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${Variable.mobile_width}) {
    flexdirection: "column";
  }
  background-color: #c7bfbf;
  box-shadow: 6px 6px 10px 2px black;
  border-radius: 2rem;
  margin-bottom: 1rem;
`;

export const ProductDetail = styled.div`
  flex: 3;
  display: flex;
  padding:1rem ;
  align-items:center ;
 
`;

export const Image = styled.img`

  width: 200px;
  height:200px ;
  object-fit:cover ;
  border-radius:1rem ;
  
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* align-items:flex-start ; */
  justify-content: space-around;
`;

export const ProductInfo = styled.div`
display:flex ;
flex-direction:column ;

`;
export const InfoRow=styled.div`
display:flex ;
align-items:center ;
h4{
    font-size:1.2rem ;
    color:${(props)=>props.theme.secondaryColor}; ;
}
p{
    font-size:1.05rem ;
    margin:0.8rem ;
}

`





export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media only screen and (max-width: ${Variable.mobile_width}){ margin: 5px 15px }
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media only screen and (max-width: ${Variable.mobile_width}){ marginBottom: "20px" }
  span{
    color:${(props)=>props.theme.buttonColor};
    font-weight:bold ;
  }
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled(motion.div)`
  flex: 1;
  border: 5px solid ${(props)=>props.theme.buttonColor};;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  
`;

export const SummaryTitle = styled.h1`
  font-weight: 600;
  color:${(props)=>props.theme.secondaryColor};
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight:600;
 
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
