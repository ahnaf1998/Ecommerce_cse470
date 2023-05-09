import axios from "axios";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./newProduct.css";


export const NewProduct=()=> {
  const navigate=useNavigate()
 const [productData,setProductData]=useState({
   title:"",
   img:"",
   desc:"",
   catagories:"",
   price:0,
   inStock:0,
 })
 const{title,img,desc,catagories,price,inStock}=productData
 const generateError = (err) =>
 toast.error(err, {
   position: "bottom-right",
 });


  const createProduct=async(event)=>{
    event.preventDefault();
    console.log(productData)
    try {
      const {data}=await axios.post('http://localhost:5001/api/products/newproduct',{
        ...productData,
      },{ withCredentials: true })
      if (data) {
        if (data.errors) {
          const { title,img,desc,catagories,price,inStock } = data.errors;
          if (title) generateError(title);
          else if (img) generateError(img);
          else if (desc) generateError(desc);
          else if (catagories) generateError(catagories);
          else if (price) generateError(price);
          else if (inStock) generateError(inStock);
        } else {
          navigate("/");
        }
      }

    } catch (error) {
      console.log(error);
    }

    // window.location.reload(true);
    // console.log(catagories+title)
   

  }
  return (
    <>
    <div className="newProduct">
    
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm"  onSubmit={createProduct}>
        <div className="addProductItem">
          <label>Image</label>
          <input type="text" id="file" name="img"
            value={img}
            onChange={(e)=>setProductData({...productData,[e.target.name]:e.target.value})}/>
        </div>
        <div className="addProductItem">
          <label>Product Name</label>
          <input type="text" placeholder="Name" name="title"
            value={title}
            onChange={(e)=>setProductData({...productData,[e.target.name]:e.target.value})} />
        </div>
        <div className="addProductItem">
          <label>Product Description</label>
          <input type="text" placeholder="about product" name="desc"
            value={desc}
            onChange={(e)=>setProductData({...productData,[e.target.name]:e.target.value})} />
        </div>
        <div className="addProductItem">
        
          <label>Catagories</label>
          <input type="text" placeholder="type..."  name="catagories"
            value={catagories}
            onChange={(e)=>setProductData({...productData,[e.target.name]:e.target.value})}/>
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" placeholder="amount" name="price"
            value={price}
            onChange={(e)=>setProductData({...productData,[e.target.name]:e.target.value})}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" name="inStock"
            value={inStock}
            onChange={(e)=>setProductData({...productData,[e.target.name]:e.target.value})}/>
        </div>
        
        <button className="addProductButton" type="submit"
       >Create</button>
      </form>
      
    </div>
    <ToastContainer/>
    
    </>
  );
}
