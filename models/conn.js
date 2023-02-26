const mongoose=require('mongoose');

const problog=new mongoose.Schema({
    title:{
        type:String
    },
    desc:{
        type:String
    },
    cate:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    image:{
        data:Buffer,
        contentType:String
    }
})
module.exports=mongoose.model("Problog",problog)