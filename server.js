const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8'])

const express=require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");
const port=process.env.Port ||7000;
const mongoose=require("mongoose");
const {CreateAccount,Login}=require("./controllers/user");
const {auth}=require("./middleware/auth");
const userRoute=require("./routes/user");
app.use(cors());

app.use(express.json());

app.post("/signin",CreateAccount);
app.post("/login",Login)
app.get("/api/routes",userRoute);

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