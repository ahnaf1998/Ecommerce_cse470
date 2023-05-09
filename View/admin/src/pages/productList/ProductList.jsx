import { Table } from "@material-ui/core";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./productList.css";

export default function ProductList() {
  const[foodlist,setFoodList]=useState([]);
  
  useEffect(()=>{
    Axios.get("http://localhost:5001/api/products").then((response)=>{
      setFoodList(response.data);
    })

  },[foodlist])
 
  return(
    <>
    <div className="productList">
    <Link to="/newproduct">
    <button className="productAddButton">Create New Product</button>
    </Link>
    <Table>
      <tr style={{fontSize:"2rem"}}>
        <td>Product Image</td>
        <td>Product Name</td>
        <td>Catagories</td>
        <td>Price</td>
        <td>inStock</td>
        
      </tr>
      
      {foodlist.map((items)=>
        <tr>
          <td><img  className='productListImg'src={items.img} alt=''/></td>
          <td>{items.title}</td>
          <td>{items.catagories}</td>
          <td>{items.price}</td>
          <td>{items.inStock}</td>
          

        </tr>
      )}
    </Table>
    </div>
    </>
  )
}
