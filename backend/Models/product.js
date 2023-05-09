const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
       type: String, 
       required: [true, 'Please add a title'], 
       unique: true 
      },
    desc: {
       type: String, 
       required: [true, 'Please add a desc'],
      },
    img: {
       type: String,
       required: [true, 'Please add an image'], 
       unique: true  
      },
    catagories: {
       type: String ,
       required: [true, 'Please add a catagories'],
      },
    price: {
       type: Number, 
       required: [true, 'Please add price'],
      },
   inStock: {
       type: Number,
       required: [true, 'Please add available amount of product'],  
      },
    
  },
  {
     timestamps: true 
  }
);

module.exports = mongoose.model("Product", ProductSchema);