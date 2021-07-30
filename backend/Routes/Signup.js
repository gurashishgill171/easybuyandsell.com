const college=require('../Schemas/NewUser');
const route = require('express').Router();
const collegeList=require('../collegeList');

route.post('/',async (req,res)=>{
    
    try{ 
      console.log(req.body.college);
      if(!collegeList.includes(req.body.college))
    {    
         res.send("College not Registered") 
      return
    }
    
    const userInfo={
           "_id":req.body.id,
           "name":req.body.name,
           "college":req.body.college,
           "phone":req.body.phone,
           "email":req.body.email,
           "age":req.body.age
      }
    
    
    //accessing model  
   
    const College=college(req.body.college)  
   
    const user=new College(userInfo);
  
    try {
       await user.save();

       res.send(user.save());
    } catch (e) {
        res.send(e);
    }
  }catch(e){
    console.log(e);
    res.send(e);
  }


})

module.exports=route;