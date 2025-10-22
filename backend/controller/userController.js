
const User = require("../models/userModel")

const readUsers = async (req, res) => {
  try {
    const users = await User.find(); // fetch all documents from users collection
    res.status(200).json(users);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Internal Server Error");
  }
};

const addUser = async(req,res)=>{
try {
    const userData = req.body;
    console.log("from userData",userData)
    const newUser = new User(userData);
    await newUser.save();
    res.status(201).send({
      message: "User added successfully!"
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {addUser,readUsers}