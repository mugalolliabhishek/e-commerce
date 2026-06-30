const Order=require("../model/order");
 
const createOrder=async (req,res) => {
    try{
        const newOrder= new order(req.body);
        const saveorder= await newOrder.save();

        res.status(200).json({message:"Order created"})
    }
    catch(error){
        res.status(400).json({message:error.message});
        
    }
};

const getallOrders=async (req,res) => {
    try{
        const Order = await Order.find().populate("User") .populate("shippingAddress") .populate("poducted.products")
        res.status(200).json({message:"Getted All Orders"})
}
catch(error){
    res.status(400).json({message:message.error})
}
};

const getsingleOrder=async(req,res) =>{
    try{
        const Order = await Order.findById(req.params.id)  .populate("User") .populate("shippingAddress") .populate("poducted.products")
        if(!Order){
            res.status(200).json({ message:"Order not found"})
    }
}
catch(error){
    res.status(400).json(error.message)
}
}

const getparticularuserOrder=async(req,res) =>{
try{
    const Order=await Order.find({user:req.params.userId}).populate("shippingAddress") .populate("poducted.products")
     res.status(200).json(Orderrders);
}
catch(error){
    res.status(400).json(error.message)
}
}

const updateOrder = async (req, res) => {

    try {

        const updatedOrder = await Order.findByIdAndUpdate( req.params.id,  req.body,  { new: true } );

        if (!updatedOrder) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json(updatedOrder);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }

};


const deleteOrder = async (req, res) => {

    try {

        const deletedOrder = await Order.findByIdAndDelete(req.params.id);

        if (!deletedOrder) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.status(200).json({
            message: "Order deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

};



module.exports={ createOrder,getallOrders, getsingleOrder,getparticularuserOrder,updateOrder,deleteOrder}