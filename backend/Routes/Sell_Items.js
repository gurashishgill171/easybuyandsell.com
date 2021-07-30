const route = require('express').Router();
const Products=require('../Schemas/Product')

route.get('/',async(req,res)=>{
  
    const num=req.query.num

  const Items=await Products.find().sort({createdAt:-1}).limit(9);
  res.send(Items)
   

})


module.exports=route