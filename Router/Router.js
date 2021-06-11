const express = require("express");

// Require router from express
const router = express.Router();


// Require user schema
const User = require('../model/user')



//route
// app.use("/api/persons", require("./routes/person"));
// Post
// path : http://localhost:5000/api/users/addUser
router.post("/addUser", async (req, res) => {
    const { name, age, email, tel, } = req.body;
    try {
      newUser = new User({  
        ...req.body,
      });
       await newUser.save();
      res.status(200).send({msg: "User Added with success", newUser});
    } catch (err) {
      res.status(500).send({msg: "Server error"})
      console.log(err);
    }
  });

  // path : http://localhost:5000/api/users/getAll
// get all person
// public

router.get("/getAll", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ msg: "data fetched", users });
  } catch (error) {
    console.log(error);
  }
});


//http://localhost:5000/api/users/findOneUpdate
//Perform New Updates on a Document Using model.findOneAndUpdate()

router.put("/findOneUpdate", async (req, res) => {
  try {
    const update = await User.findOneAndUpdate(
      { id : req.body._id },
    );
    res.json({ msg: "Edited", update});
  } catch (err) {
    console.log(err);
  }
});

//http://localhost:5000/api/users/deleteUser
//Delete One User Using model.findByIdAndRemove

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    console.log(user);
    res.json({ msg: "user deleted", user });
  } catch (err) {
    console.log(err);
  }
});



  module.exports = router; 