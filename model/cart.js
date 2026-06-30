const mongoose=require("mongoose");
const cartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
        
    },
    products:[{
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"product",
            required:true
        },
        quantity:{
            type:Number,
            required:true,
            default:1
        },
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true   
        }

    }]
})

module.exports=mongoose.model("cart",cartSchema);