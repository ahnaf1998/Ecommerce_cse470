const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const stripeRoute=require('./routes/stripe')

// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");

const cors = require("cors");
 

dotenv.config();
mongoose
   .connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
   .then(() => console.log("DB Connection Successfull!"))
   .catch((err) => {
     console.log(err.message);
   });
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/checkout", stripeRoute);


// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);

const port =5001
app.listen(port, () => {
console.log(`Backend server is running on port ${port}!`);
 });