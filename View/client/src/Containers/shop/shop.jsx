import Axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shopcard } from '../../Components/shopcard/shopcard'
import { Container } from '../../Themes/globalComponents.styled'
import { ShopContainer, ShopHeader, ShopItems, ShowAllButton } from './shop.styled'

const Shop = () => {
  const navigate=useNavigate()
  const[foodlist,setFoodList]=useState([]);

  useEffect(()=>{
    const getPopularProducts=async()=>{
      try {
        const response=await Axios.get("http://localhost:5001/api/products/popular")
        // console.log(response.data)
        setFoodList(response.data)
      } catch (error) {
        console.log(error);
      }
      
    }
    getPopularProducts()
    

  },[])

  return (
    <Container>
      <ShopContainer>
        <ShopHeader>
            <h1>Our Popular Items</h1>
            <p>Grab your favourite items and make yor afternoon memorable</p>
        </ShopHeader>
        <ShopItems>
          {
            foodlist.map((e)=>
              <Shopcard image={e.img} title={e.title} price={e.price} navigateId={e._id} />
            )
          }
            
        </ShopItems>
        <ShowAllButton onClick={()=>navigate('/products')}>Show All </ShowAllButton>
        </ShopContainer>
        
    </Container>
  )
}
export default Shop
