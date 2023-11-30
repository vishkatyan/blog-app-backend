// import the model
const Comments = require("../models/comments");

//define the route handler and export it
exports.createComment = async(req,res)=>{
    try{
        //extract name and comment from req body
        const{name, comment} = req.body;

        //create comment type object in db
        const response = await Comments.create({name, comment});
        
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

exports.getComments = async(req,res)=>{
    try{
        // getting all comments
        const getComments = await Comments.find({});
        //response
        res.status(200).json({
            success:true,
            data:getComments,
            message: "Entire comments fetched.."
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