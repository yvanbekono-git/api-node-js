const mongoose=require('mongoose');
require('dotenv').config();


const connectDB=async ()=>{
    try {
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo Connecté !");
    } catch (error) {
        console.error(error);
        process.exit();
    }
}

module.exports=connectDB;