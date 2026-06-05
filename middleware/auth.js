const jwt=require("jsonwebtoken");
require("dotenv").config()
const auth=async(req,res,next)=>{
try{
const token=req.headers.authorization
if(!token){
    return res.status(404).json({
        status:false,
        message:"Token not found"
    })
    
    const decoded=await jwt.verify(token,process.env.SECRET_KEY);
    
}

}
catch(error){
res.status(404).send(error.message)
}

}
module.exports={auth};