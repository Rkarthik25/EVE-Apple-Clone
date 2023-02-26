const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { adminModel } = require("../models/admin.model");
const adminRouter = express.Router();

// * get details of all the admins

adminRouter.get("/", async (req, res) => {
  try {
    let admins = await adminModel.find();
    res.send(admins);
  } catch {
    res.send("can not get details of the admins");
  }
});
//* registration of the seller
adminRouter.post("/register", async (req, res) => {
  try {
    let email = req.body.email;
    let admins = await adminModel.find({ email });
    if (admins.length == 1) {
      res.send("This email is already registered with an account");
      console.log("This email is already registered with an account");
    } else {
      bcrypt.hash(req.body.password, 5, async (err, hash) => {
        if (err) {
          console.log(err);
        } else if (hash) {
          req.body.password = hash;

          let newAdmin = new adminModel(req.body);
          await newAdmin.save();
          res.send(
            "We have received your details. We will verify your details and get back to you asap"
          );
          console.log(
            "We have received your details. We will verify your details and get back to you asap"
          );
        }
      });
    }
  } catch {
    res.send("can not register ");
    console.log("can not register ");
  }
});

//* login of admin

adminRouter.post("/login", async (req, res) => {
  let email = req.body.email;

  try {
    let admin = await adminModel.find({ email });

    if (admin) {
      bcrypt.compare(req.body.password, admin[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ admin: admin[0]._id }, "masai");
          res.send({ msg: "login successfull", token: token, admin: admin });
          console.log("login successfull");
        } else res.send("please enter correct password");
      });
    } else {
      res.send("please enter correct email");
    }
  } catch {
    res.send("please enter correct email");
  }
});

//*update status of the user

adminRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  try {
    await adminModel.findByIdAndUpdate(id, req.body);
    res.send("status is updated");
  } catch {}
});
// exporting

module.exports = {
  adminRouter,
};
