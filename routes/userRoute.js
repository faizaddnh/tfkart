const express = require('express');
const User = require('../model/userModel');
const bcrypt = require("bcryptjs");
const { isAuth, isAdmin, generateToken } = require("../utils.js");


const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    try {
        User.find({});
        res.send(data);
    } catch (err) {
        res.send(err);
    }
});


userRouter.get(
    "/:id", async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: "User Not Found" });
      }
    });

userRouter.post('/signup', async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password),
            isAdmin: req.body.isAdmin,
            image: req.body.image,

        });
        const user = await newUser.save();

        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            image: user.image,
            token: generateToken(user),
        });

    } catch (err) {
        res.send(err.message);

    }
});

userRouter.post('/signin', async (req, res) => {

    const user = await User.findOne({ email: req.body.email });
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                email: user.email,
                name: user.name,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }

    res.status(401).send({ message: "Invalid email or password" });
});


userRouter.put(
    "/profile",
    isAuth,
    async (req, res) => {
      const user = await User.findById(req.user._id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
  
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
        });
      } else {
        res.status(404).send({ message: "User not found" });
      }
    });

module.exports = userRouter;