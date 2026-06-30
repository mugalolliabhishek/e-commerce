const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8'])

const express=require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");
const port=process.env.Port ||7000;
const mongoose=require("mongoose");
const {CreateAccount,Login,Logout}=require("./controllers/user");
const {createproduct,getproduct,updateproduct,deleteproduct}=require("./controllers/products");
const {createCart,getCart,updateCart,deleteCart}=require("./controllers/cart")
const{createAddress,getAddress,updateAddress,deleteAddress}=require("./controllers/address")
const{ createOrder,getallOrders, getsingleOrder,getparticularuserOrder,updateOrder,deleteOrder}=require("./controllers/order");
const {auth}=require("./middleware/auth");
const userRoute=require("./routes/user");
app.use(cors());
app.use(express.json());

app.post("/signin",CreateAccount);
app.post("/login",Login);
app.post("/logout",Logout);
app.get("/api/routes",userRoute);

app.post("/createproduct",createproduct);
app.get("/getproduct/:id",getproduct);
app.put("/updateproduct/:id",updateproduct);
app.delete("/deleteproduct/:id",deleteproduct);

app.post("/createcart",createCart);
app.get("/getcart/:userId",getCart);
app.put("/updateCart/:id",updateCart);
app.delete("/deleteCart/:id",deleteCart);

app.post("/createAddress",createAddress);
app.get("/getAddress/:userid",getAddress);
app.put("/updateAddress/api/:id",updateAddress);
app.delete("/deleteAddress/api/:id",deleteAddress)


app.post("/createOrder",createOrder);
app.get("/getallOrder",getallOrders);
app.get("getsingleOrder/:id",getsingleOrder);
app.get("getparticularOrder/:userId",getparticularuserOrder);
app.put("updateOrders/:id",updateOrder);
app.delete("deleteOrders/:id",deleteOrder);


mongoose.connect(process.env.mongoose_url)
.then(() => {
 app.listen(port,()=>{
    console.log(`server is runnning on port ${port}`);
    console.log("mongoose is connected");
   })
})
.catch((error)=>{
    console.log( "mongoose not connected",error);
})