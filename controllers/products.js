const product=require("../model/products")
const createproduct=async(req,res)=>{
    try{
        const {name,description,price,category}=req.body;
        const data=await product.create({name,description,price,category});
        res.json({
            message:"Product Created Successfully",
            data 
              })
    }
    catch(error){
        res.send(error.message)
    }

    }

    const getproduct=async(req,res)=>{
        try{
            const data=await product.findById();
            res.json({
                message:"product getted successfully",
                data
            })
        }
        catch(error){
            res.send(error.message)
        }
    }

    const updateproduct=async(req,res)=>{
        try{
            const {id}=req.params;
            const data=await product.findByIdAndUpdate(id,req.body,{new:true});
            res.json({
                message:"product updated",
                data
                
            })
        }
        catch(error)
        {
            res.send(error.message)
    
        }
    }


    const deleteproduct=async (req,res)=>{
        try{
             const {id} = req.params;
            const data=await product.findByIdAndDelete(id)
            res.json({
                message:"Id Deleted Successfully",
                data
            })
        }
        catch(error){
            res.send(error.message)
        }
    }

    module.exports={createproduct,getproduct,updateproduct,deleteproduct}