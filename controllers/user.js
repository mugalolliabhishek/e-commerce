const User=require("../model/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const CreateAccount=async(req,res)=>{
try{
const {name,email,password}=req.body;
const hashpassword=await bcrypt.hash (password,12);
const userdata=await User.create({name,email,password:hashpassword});
const comparepassword=await bcrypt.compare(password.userdata.password);
if(!comparepassword){
    throw new error("invalid password");
}
const checkuser=await User.find({email})
if(checkuser){
    throw new error("email already exist");
}
res.json({
    message:"Account Created Successfully",
    userdata
});

}
catch(error){
res.send(error);
}
}

const Login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const userdata=await User.findOne({email});
        if(!userdata){
            throw new error("user not found");
        }
              const token = await jwt.sign(
                {id:userdata._id},
                process.env.SECRET_KEY,
                {expiresIn:"30d"}
              )
              res.json({
                message:"Login Successfully",
                userdata,
                token:token
              })
    }
    catch(error){
        res.status(404).send({message:error.message})
    }
}

const Logout=async(req,res)=>{
  try{
    res.json({
        message:"Logout Successfully"
    })
  }
  catch(error){
    res.send(error.message)
  }
}
module.exports={CreateAccount,Login,Logout};