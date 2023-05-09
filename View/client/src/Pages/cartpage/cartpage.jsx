

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


import StripeCheckout from "react-stripe-checkout";
import { Navbar } from "../../Components/navbar/navbar";
import { useShop } from '../../ContextApi/useShop';

import Axios from 'axios';
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import logo from '../../assets/home.jpg';

import { Bottom, CartContainer, Details, Image, Info, InfoRow, PriceDetail, Product, ProductDetail, ProductInfo, ProductPrice, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton } from './cartpage.styled';
const upperVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: -200 }
};
const cartVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, x: -200 }
};
const summaryVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: 200 }
};









const CartPage = () => {
  const KEY = process.env.REACT_APP_STRIPE_KEY;
  console.log(KEY)
  
  

  const{cart_products,total}=useShop()

  
  const navigate=useNavigate()
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  

  const totalpay=total+100-70
  const [stripeToken, setStripeToken] = useState(null)
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await Axios.post("http://localhost:5001/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: total,
        });
        console.log(res.data)
        navigate('/',{
          stripeData: res.data,
          products: cart_products, });
        toast("Wow so easy!")
      } catch(err) {
          navigate('/')
          toast("Order payment Completed", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark"
          })

      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate, cart_products]);
 
  
  return (
    <>
     
      <Navbar/>
      <CartContainer>
        <Title ref={ref}
      variants={upperVariant}
      initial="hidden"
      animate={control}>Your Cart Items</Title>
        <Top ref={ref}
      variants={upperVariant}
      initial="hidden"
      animate={control}>
          <TopButton onClick={()=>navigate('/products')}>CONTINUE SHOPPING</TopButton>
         
          <StripeCheckout
              name="E-Commerce"
              image={logo}
              billingAddress
              shippingAddress
              description={`Your total is $${totalpay}`}
              amount={totalpay * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <TopButton>CHECKOUT NOW</TopButton>
            </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
          {cart_products.map((value,key)=>(
              <Product ref={ref}
              variants={cartVariant}
              initial="hidden"
              animate={control}>
                <ProductDetail>
                  <Image src={value.img} />
                  <Details>
                    <ProductInfo>
                      <InfoRow><h4>Product Name: </h4><p>{value.title}</p></InfoRow>
                      <InfoRow><h4>Product Id: </h4><p>{value._id}</p></InfoRow>
                      <InfoRow><h4>Product Catagory: </h4><p>{value.catagories}</p></InfoRow>
                       
                      
                      
                    </ProductInfo>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  {/* <ProductAmountContainer>
                  <IoRemoveOutline onClick={()=>setQuantity(value.quantity-1)} />
                  <ProductAmount>{quantity}</ProductAmount>
                  <IoAddOutline onClick={()=>setQuantity(value.quantity+1)}/>

                    
                   
                  </ProductAmountContainer> */}
                  <ProductPrice><span>Price:  </span><br/>
                      {value.price}*{value.quantity}={value.price*value.quantity}
                  </ProductPrice>
                </PriceDetail>
                
              </Product>
))}
            
          </Info>
          <Summary ref={ref}
      variants={summaryVariant}
      initial="hidden"
      animate={control}>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>-70</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{totalpay}</SummaryItemPrice>
            </SummaryItem>
            
          </Summary>
        </Bottom>
      </CartContainer>
      
    </>
  );
};
export default CartPage

