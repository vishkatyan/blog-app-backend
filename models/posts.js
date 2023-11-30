//schema for post in blog app
const mongoose = require('mongoose');
const postsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
    },
    author:{
        type:String,
        required:true,
        maxLength:50,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    content:{
        type:String,
        required:true,
    },
});
module.exports = mongoose.model("posts",postsSchema );