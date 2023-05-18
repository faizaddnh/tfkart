const express = require('express');
const User = require('../model/userModel');
const bcrypt = require("bcryptjs");


const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    try {
        User.find({});
        res.send(data);
    } catch (err) {
        res.send(err);
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
            _id: User._id,
            name: User.name,
            email: User.email,
            isAdmin: User.isAdmin,
            image: User.image,
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
            });
            return;
        }
    }

    res.status(401).send({ message: "Invalid email or password" });
})

module.exports = userRouter;