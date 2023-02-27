const express = require("express");
const { UserModel } = require("../Models/user.model");
const cartRouter = express.Router();

cartRouter.use(express.json());

cartRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const person = await UserModel.findById({ _id: id });
    res.send(person.cart);
  } catch (err) {
    res.send(err);
  }
});

cartRouter.post("/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  // console.log(id,payload);
  try {
    const person = await UserModel.findById({ _id: id });
    console.log(person, "abc");
    // res.send(person)
    person.cart.push(payload);
    person.save();
    res.send(person.cart);
  } catch (err) {
    res.send(err);
  }
});

cartRouter.delete("/:id/:num", async (req, res) => {
  const id = req.params.id;
  const num = req.params.num;
  try {
    const person = await UserModel.findById({ _id: id });
    const newCart = person.cart.splice(num, 1);
    person.save();
    res.send("cart item deleted !");
  } catch (err) {
    res.send(err);
  }
});

module.exports = {
  cartRouter,
};
