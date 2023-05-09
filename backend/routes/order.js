
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../Controllers/verifyToken");

const router = require("express").Router();

const {createOrder,updateOrder,deleteOrder,getUserOrders,getAllOrders,getMonthlyIncome}=require('../Controllers/orderController')

//CREATE

router.post("/", verifyToken,createOrder );

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization,getUserOrders);

// //GET ALL

router.get("/", verifyTokenAndAdmin,getAllOrders );

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin,getMonthlyIncome );

module.exports = router;