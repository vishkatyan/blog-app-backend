const Post = require("../models/posts");
// const {route} = require('../routes/posts');

//define the route handler and export it
exports.createPosts = async(req,res)=>{
    try{
        //extract title, author, createdAt and content from request body
        const {title, author, content} = req.body;

        //create a post and insert i tinto db
        const response = await Post.create({title, author, content});

        //return a success flag
        res.status(200).json({
            success:true,
            data:response, //response from db
            message: 'Post Created Successfully!'
        })

    }
    catch(error){
        console.error(error);
            console.log(error);
            res.status(500).json({
                success:false,
                data:"Internal Server Error",
                message: error.message,
            });
    }
}

exports.getPosts = async(req,res)=>{
    try{
        //get all the data
        const getPosts = await Post.find({});
        //response
        res.status(200).json({
            success:true,
            data:getPosts,
            message: "Entire posts data is fetched.."
        });

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            error:err.message,
            message: "Can't fetch..."
        });
    }
}