import { useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import LazyCard from '../LazyCard/LazyCard';
import { Card, CardBottom, CardHead, Fav, FavButton, CardImage, UnFav } from './shopcard.styled';

const cardVariant={
  visible: { opacity: 1, scale: 1, y:0, transition: { duration: 0.3 } },
  hidden: { opacity: 0, scale: 0,y:150 }
}

export const Shopcard = ({image,title,price,navigateId,loading}) => {

  const navigate=useNavigate()
  const[fav,setFav]=useState('false')
  const control=useAnimation();
  const[ref,inView]=useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const FavClick=()=>{
    setFav(!fav);
  }
  
  return (
    <>
      {loading ? (
        <LazyCard />
      ) : (
        <Card
          ref={ref}
          variants={cardVariant}
          initial="hidden"
          animate={control}
        >
          <CardImage src={image} alt="" />

          <CardHead>{title}</CardHead>
          <FavButton onClick={FavClick}>{fav ? <Fav /> : <UnFav />}</FavButton>
          <CardBottom>
            <h3>
              <span>Price: </span>
              {price}
            </h3>
            <button onClick={() => navigate(`/product/${navigateId}`)}>
              Details
            </button>
          </CardBottom>
        </Card>
      )}
    </>
  );
}
