


const {createProduct,
updateProduct,deleteProduct,getProduct,getAllProduct,getPopularProduct,getShirtProduct,getTshirtProduct,getJeansProduct}=require('../Controllers/productController')

const router = require("express").Router();

//CREATE
router.post("/newproduct",createProduct);
//GET ALL PRODUCTS
 router.get("/", getAllProduct);
 //get popular product
 router.get("/popular", getPopularProduct);
 
 //get cake product
 router.get('/shirt',getShirtProduct)
 //get cupcake product
 router.get('/tshirt',getTshirtProduct)
 //get brownies product
 router.get('/jeans',getJeansProduct)
 
 //get Single product
 router.get("/:id",getProduct );
 //UPDATE
// router.put("/:id", verifyTokenAndAdmin,updateProduct );

// //DELETE
// router.delete("/:id", verifyTokenAndAdmin,deleteProduct );

// //GET PRODUCT

module.exports = router;