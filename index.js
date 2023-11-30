const express = require('express'); //importing the express here
const app = express(); //creating the instance for express
 require("dotenv").config(); //importing all the data of .env file here...
 const PORT = process.env.PORT || 4000;

 //middleware to parse json req body (Parser)
app.use(express.json());

//import the routes
const create = require("./routes/posts");

//mount(Add/Append) the todo API routes
app.use("/api/v1", create);


//listen to app 
app.listen(PORT,()=>{
    console.log(`Server is running successfully on ${PORT}`);
})

//db connection
const dbConnect = require("./config/database");
dbConnect;

//default route
app.get("/",(req,res)=>{
    res.send(` <h1>This is my blogging Application's Backend!</h1>`)
})