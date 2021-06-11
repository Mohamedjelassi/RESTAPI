const mongoose = require("mongoose");
const dotenv = require('dotenv').config({ path: '/.env' })




const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGOURI, {
        
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log("mongoose connected");
    } catch (error) {
      console.log(error);
    }
  };
  
  module.exports = connectDB;
  