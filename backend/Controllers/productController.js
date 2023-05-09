const Product = require("../Models/product");



const handleErrors = (err) => {
  let errors = { 
  title:"",
  img:"",
  desc:"",
  catagories:"",
  price:0,
  inStock:0
};

  console.log(err);
if (err.code === 11000) {
    errors.title = "Product name or image is already used";
    return errors;
  }

  if (err.message.includes("Product validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
      
    });
  }

  return errors;
};

//create product
const createProduct=async (req, res) => {
  try {
    const {title,img,desc,catagories,price,inStock}=req.body
    const product=await Product.create({title,img,desc,catagories,price,inStock})
    res.status(200).json({product:product._id,message:'New Product created',created:true});

  } catch (error) {
    console.log(error);
    const errors = handleErrors(error);
    res.status(500).json({ errors, created: false });
  }  
}
 
  //get all products
  const getAllProduct=async(req,res)=>{
    try {
      const products=await Product.find({})
      res.json(products)
    } catch (error) {
      res.json(error)
    }
  }

  //get only 6 products
  const getPopularProduct=async(req,res)=>{
    try {
      const popularProducts=await Product.find().sort({title:1}).limit(6)
      res.json(popularProducts)
    } catch (error) {
      res.json(error)
    }
  }
    
  //get product
  const getProduct=async (req, res) => {
    
    try {
      const product=await Product.findById(req.params.id)
      res.json(product)
    } catch (error) {
      console.log(error)
    }

    
  };

  // get cake product
  const getShirtProduct=async (req, res) => {
  
  
    try {
      const products=await Product.find({catagories:"shirt"})
      res.json(products)
    } catch (error) {
      console.log(error)
    }

    
  };
  //get cupCake products
  const getTshirtProduct=async (req, res) => {
  
  
    try {
      const products=await Product.find({catagories:"tshirt"})
      res.json(products)
    } catch (error) {
      console.log(error)
    }

    
  };
// get brownies product
  const getJeansProduct=async (req, res) => {
  
  
    try {
      const products=await Product.find({catagories:"jeans"})
      res.json(products)
    } catch (error) {
      console.log(error)
    }

    
  };


//update
const updateProduct=async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }

//delete
const deleteProduct=async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }




//get all products
// const getAllProduct=async (req, res) => {
//     const qNew = req.query.new;
//     const qCategory = req.query.category;
//     try {
//       let products;
  
//       if (qNew) {
//         products = await Product.find().sort({ createdAt: -1 }).limit(1);
//       } else if (qCategory) {
//         products = await Product.find({
//           categories: {
//             $in: [qCategory],
//           },
//         });
//       } else {
//         products = await Product.find();
//       }
  
//       res.status(200).json(products);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }







module.exports = {
    createProduct,updateProduct,deleteProduct,getProduct,getAllProduct,getPopularProduct,getShirtProduct,getTshirtProduct,getJeansProduct
}