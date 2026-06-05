const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email ");
            }
        }
    },
    password:{
        type:String,required:true,
        trim:true,
        minlength:8,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Password must be contains at least 8 characters ")
                throw new Error("password invalid")
            }
        }
    },
      token: {
      type: String
   }
    })
    module.exports=mongoose.model("User",userSchema)
