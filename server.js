const express = require("express");
const dotenv = require("dotenv").config({ path: "./config/.env" });
const User = require("./model/user");
const cors = require("cors");



const connectDB = require("./config/connectDB");

// require router
const userRoutes = require('./Router/Router')




//instantiation
const app = express();

// middlewware
app.use(express.json());
app.use(cors());

// connect to DB
connectDB();

//use Routes
app.use('/api/users', userRoutes)




//port
const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server is running on port ${PORT}`);
});
