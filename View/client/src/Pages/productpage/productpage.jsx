import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components/navbar/navbar';

import { useShop } from '../../ContextApi/useShop';
// import product from '../../product.json';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AddContainer, Amount, AmountContainer, Button, Desc, Image, ImgContainer, InfoContainer, Price, Title, Wrapper,Category } from './productpage.styled';

const imgVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 }
};

const textVariant = {
  visible: { opacity: 1,x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 100 }
};



const Productpage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  console.log(id)
  const navigate=useNavigate()
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState({});
  useEffect(() => {
    const getProducts=async()=>{
      try {
        const response=await Axios.get(`http://localhost:5001/api/products/${id}`)
        console.log(response);
        setItem(response.data)
        console.log(item)
      } catch (error) {
        console.log(error)
      }
    }
 getProducts()
}, []);

//cart
const{cart_products,addToCart,removeFromCart}=useShop()
const [isInCart, setIsInCart] = useState(false)
const {title,img,price,desc,_id,catagories}=item
const[token]=useCookies('jwt')

useEffect(() => {
  const productIsInCart = cart_products.find((product) => product.title ===title);

  if (productIsInCart) {
    setIsInCart(true);
  } else {
    setIsInCart(false);
  }
}, [cart_products,title]);


const handleClick=()=>{
  if(!token.jwt){
    navigate('/login')
  }
  else{
    const product = { title,img,desc, price,_id,catagories,quantity};

  if (isInCart) {
    removeFromCart(product);
  } else {
    addToCart(product);
  }
  }
  
}
const control = useAnimation();
const [ref, inView] = useInView();

useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    control.start("hidden");
  }
}, [control, inView]);

 

 

  return (
    <>
      <Navbar />
      <Wrapper>
        <ImgContainer
          ref={ref}
          variants={imgVariant}
          initial="hidden"
          animate={control}
        >
          <Image src={item.img} />
        </ImgContainer>

        <InfoContainer
          ref={ref}
          variants={textVariant}
          initial="hidden"
          animate={control}
        >
          <Title>{item.title}</Title>
          <Category><span>Category:  </span>{item.catagories}</Category>
          <Desc><span>Description:</span><br/>{item.desc}</Desc>
          <Price>
            <span>Price:  </span>
            {item.price}
          </Price>

          <AddContainer>
            <AmountContainer>
              <IoRemoveOutline onClick={() => setQuantity(quantity - 1)} />
              <Amount>{quantity}</Amount>
              <IoAddOutline onClick={(prev) => setQuantity(quantity + 1)} />
            </AmountContainer>
            <Button onClick={handleClick} isInCart={isInCart}>
              {isInCart ? "Added" : "ADD TO CART"}
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </>
  );
}
export default Productpage
