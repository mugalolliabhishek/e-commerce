const Order=require("../model/order");
 
const createOrder=async (req,res) => {
    try{
        const newOrder= new Order(req.body);

        res.status(200).json(newOrder)
    }
    catch(error){
        res.status(400).json({message:error.message});
        
    }
};

const getallOrders=async (req,res) => {
    try{
        const Orders = await Order.find().populate("user") .populate("shippingAddress") .populate("producted.products")
        res.status(200).json(Orders)
}
catch(error){
    res.status(400).json(error.message)
}
};

const getsingleOrder=async(req,res) =>{
    try{
        const Order = await Order.findById(req.params.id)  .populate("User") .populate("shippingAddress") .populate("poducted.products")
        if(!Order){
            res.status(200).json({ message:"Order not found"},Order)
    }
}
catch(error){
    res.status(400).json(error.message)
}
}

const getparticularuserOrder=async(req,res) =>{
try{
    const Order=await Order.find({user:req.params.userId}).populate("shippingAddress") .populate("poducted.products")
     res.status(200).json(Order);
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
            },deletedOrder);
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