
;

const{
  
  deleteUser,
  getUser,
  getAllUser,
  getUserStats
}=require('../Controllers/userController')

const router = require("express").Router();

//test
router.post("/posttest",(req,res)=>{
  const username=req.body.username
  console.log(username)
})

//register





//DELETE
router.delete("/:id",deleteUser );

//GET USER
router.get("/find/:id",getUser );

//GET ALL USER
router.get("/",getAllUser);

//GET USER STATS

router.get("/stats",getUserStats);

module.exports = router;