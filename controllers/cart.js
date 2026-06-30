const Cart = require("../model/Cart");

const createCart=async(req,res)=>{
    const newCart= new Cart(req.body)
    try{
        const savedCart=await newCart.save()
        res.status(200).json(savedCart)
    }catch(error){
        res.status(500).json(error.message)
    }
}


const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({
            userId: req.params.userId
        }).populate("userId");

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const updateCart=async(req,res)=>{
    try{
        const updatedCart=await Cart.findByIdAndUpdate(req.params.id)
        res.status(200).json(updatedCart)
    }catch(error){
        res.status(400).json(error.message)
    }
}

const deleteCart=async(req,res)=>{
    try{
        const deletedCart=await Cart.findOneAndDelete(req.params.id)
        res.status(200).json(deletedCart)
    }
    catch(error){
        res.status(400).json(error.message)
    }
}

module.exports={createCart,getCart,updateCart,deleteCart};

 