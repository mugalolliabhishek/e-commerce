const mongoose=require("mongoose");
const products = require("./products");

const orderSchema= new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },

    producted:[
        {
        products:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Product"
        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        }
    }
    ],
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Address"
    },
    totalprice:{
        type:Number,
        required:true
    },
        PaymentMethod:{
            type:String,
            enum:["COD","UPI","Cardd","Net Banking"],
            default:"COD"
        },
        paymentStatus:{
            type:String,
            enum:["Pending","Paid","Failed","Refunded"],
            default:"Pending"
        },

        orderStatus:{
            type:String,
            enum:["Pending","Confirmed","Packed", "Shipped","Cash On Delivery","Delivered","Cancelled"],
            default:"Pending"
        }
        
},
{timestamps: true})

module.exports=mongoose.model("Order",orderSchema);