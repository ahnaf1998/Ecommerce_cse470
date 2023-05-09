
import Axios from "axios"
import { useEffect, useState } from 'react'
import { Navbar } from "../../Components/navbar/navbar"
import { Shopcard } from '../../Components/shopcard/shopcard'
import { Container } from '../../Themes/globalComponents.styled'
import { Filter, ProductContainer, ProductFilter, ProductHeader, ProductItems } from "./productlist.styled"




const Productlist = () => {
  const [loading,setLoading]=useState(false)
  const [ActiveGenre,setActiveGenre]=useState('')
  const[productlist,setProductList]=useState([]);
  useEffect(()=>{
  
    getProducts()
    

  },[])

  const getProducts=async()=>{
    
    setLoading(true)
    try {
      setActiveGenre('')
      
      setActiveGenre('')
      const response=await Axios.get("http://localhost:5001/api/products")
      
      setLoading(false)
      setProductList(response.data)
      
    } catch (error) {
      console.log(error);
    }
    
  }

  const getShirt=async()=>{
    setLoading(true)
    try {
      setActiveGenre('shirt')
      const response=await Axios.get("http://localhost:5001/api/products/shirt")
      setLoading(false)
      setProductList(response.data)
      
    } catch (error) {
      console.log(error);
      
    }

  }

  const getTshirt=async()=>{
    setLoading(true)
    try {
      setActiveGenre('tshirt')
      const response=await Axios.get("http://localhost:5001/api/products/tshirt")
      setLoading(false)
      setProductList(response.data)
      
    } catch (error) {
      console.log(error);
      
    }

  }

  const getJeans=async()=>{
    setLoading(true)
    try {
      setActiveGenre('jeans')
      const response=await Axios.get("http://localhost:5001/api/products/jeans")
      setLoading(false)
      setProductList(response.data)
      
      
    } catch (error) {
      console.log(error);
      
    }

  }

  
  
  
return (
  <>
  <Navbar/>
    <Container>
        
        <ProductContainer>
          <ProductHeader>
            <h2>Choose Your Favorite <br/>Products</h2>
            <p>Grab your favourite items </p>

          </ProductHeader>
          <ProductFilter>
            <Filter className={ActiveGenre===''?'active':''}
            onClick={getProducts}>All</Filter>
            <Filter className={ActiveGenre==='shirt'?'active':''} onClick={getShirt}>shirt</Filter>
            <Filter className={ActiveGenre==='tshirt'?'active':''} onClick={getTshirt}>tshirt</Filter>
            <Filter className={ActiveGenre==='jeans'?'active':''} onClick={getJeans}>jeans</Filter>

          </ProductFilter>
          <hr/>

          <ProductItems>
          {
            productlist.map((e)=>
              (
                <Shopcard image={e.img} title={e.title} price={e.price} navigateId={e._id} loading={loading}  />
              
            )
            )
              }
          
           
          </ProductItems>

        </ProductContainer>
      
      

    </Container>
    </>
  )
}
export default Productlist