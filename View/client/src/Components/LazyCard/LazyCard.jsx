import React from 'react'
import { Card, CardBottom, CardHead,FoodImage,Price,Button  } from './LazyCard.styled';


const LazyCard = () => {
  return (
    <>
    <Card>
        
        
        <FoodImage></FoodImage>
 
        <CardHead></CardHead>
        
        <CardBottom>
          <Price></Price>
          <Button ></Button>
          
          
        </CardBottom>
        
        
  

      </Card>
    </>
  )
}

export default LazyCard