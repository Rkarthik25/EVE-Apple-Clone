
const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { UserModel } = require("../Models/user.model");
const { AdminModel } = require("../models/admin.model");
const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (err) {
    res.send(err.message);
  }
});

userRouter.post("/register", async (req, res) => {
  const { Fname, Lname, phone, password, country, DOB, email } = req.body;

  try {
    let user = await UserModel.find({ email });

    if (user.length === 0) {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const User = new UserModel({
            Fname,
            email,
            password: hash,
            phone,
            Lname,
            country,
            DOB,
          });
          await User.save();
          console.log(User);
          res.send("Successfully Registered ! Please Login !!");
        }
      });
    } else {
      res.send("Already Registerd ! Please Login !");
    }
  } catch (err) {
    res.send(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.find({ email: email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (result) {
          var token = jwt.sign({ userID: user[0]._id }, "newuser");
          res.send({ msg: "Logged in !", usertoken: token, id: user[0]._id });
        } else {
          res.send("Wrong Credentials !");
        }
      });
    } else {
      res.send("Authentication Failed !");
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  userRouter,
};

