const mongoose = require('mongoose');
require("dotenv").config();

//connect server with database
const dbConnect = ()=>{
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("DataBase Connected Successfully!")
})
.catch((error)=>{
    console.log(error.message);
    console.log("Error Occured in Connection!");
    process.exit(1);
})
}

module.exports = dbConnect();