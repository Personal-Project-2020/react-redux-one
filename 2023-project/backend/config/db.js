
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async () => {

const conn = await mongoose.connect(process.env.MONGO_URL);
     try {
    console.log(`mongoDB is connected: ${conn.connection.host}`);
     } catch (error){
         console.log(error) 
     }
}
module.exports = connectDB;
