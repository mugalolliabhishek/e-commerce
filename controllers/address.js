const Address=require("../model/address");

const createAddress=async(req,res)=>{
    const newAddress=new Address(req.body)
    try{
        const savedAddress=await newAddress.save()
        res.status(200).json(savedAddress)
    }
    catch(error){
        res.status(400).json(error.message)
    }
}

const getAddress=async(req,res)=>{
    try{
        const address=await Address.findOne().populate("user")
        res.status(200).json(address)
    }catch(error){
        res.status(400).json(error.message)
    }
}

const updateAddress=async(req,res)=>{
    try{
       const updatedAddress = await Address.findOneAndUpdate( { _id: req.params.id },req.body,{ returnDocument: "after" });
           res.status(200).json(updatedAddress);
    }
    catch(error){
        res.status(400).json(error.message)
    }
}

const deleteAddress=async(req,res)=>{
    try{
        const deletedAddress=await Address.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedAddress)
        res.json("Id deleted successfully")
    }
    catch(error){
        res.status(400).json(error.message)
    }
}

module.exports={createAddress,getAddress,updateAddress,deleteAddress};