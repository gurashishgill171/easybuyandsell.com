const route=require('express').Router();
const Products=require('../Schemas/Product');
const multer=require('multer');
const college=require('../Schemas/NewUser');

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./ProductImages');
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now() + file.originalname);
    }
})

const upload=multer({storage:storage})


route.post("/",upload.array('productImage',5), async (req,res)=>{

    const Users=college(req.body.college)

    const currUser=await Users.findById(req.body.id).exec()

    if(!currUser){
        res.send("Not Valid User")
        return
    }
    let images=[]
    for(x in req.files){
        images.push(req.files[x].path)
    }
   
    const item=new Products({
        "name":req.body.name,
        "price":req.body.price,
        "quantity":req.body.quantity,
        "category":req.body.category,
        "imageUrl":images,
        "description":req.body.description,
        "seller":currUser.name,
        "email":currUser.email,
        "phone":currUser.email
    })

    await item.save()
              .then((doc)=>{
                 
                 const itemid=doc._id
                 currUser.sellItems.push(itemid)
                 currUser.save();
                 res.send("Your product has been saved!!!")
              })



})

module.exports=route