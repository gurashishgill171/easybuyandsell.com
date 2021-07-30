const mongoose=require('mongoose');
let collegeModels=[];
let colleges=[];


//structure
const user=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }, 
    age:{
        type:String,
        required:true
    },

    sellItems:[]
    ,
    created:{
       type:Date,
       default:Date.now
    }
})

// for returning model(collection) of required college 
// this is function which return model
// basically creating new model if not already in college list
const college=(collegeName)=>{
   
        if(!colleges.includes(collegeName)){
        colleges.push(collegeName);

        collegeModels[collegeName]=new mongoose.model(
            collegeName,//collectionName
            user,//Schema
            collegeName//collectionName
        )
       }

    return collegeModels[collegeName];
}


module.exports=college;