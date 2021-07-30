const route = require('express').Router();
const { query } = require('express');
const Products = require('../Schemas/Product');


route.get('/',async(req,res)=>{
      
      Products.search({
          
        "query_string":{
            "query":req.query.query+'*'
        }         
      },(err,result)=>{
          if(err)
          {   console.log(err)
              res.send(err)}
          else
         {   
             res.send(result)}

      })
})


module.exports=route