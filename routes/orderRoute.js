const express = require('express');
const { isAuth, isAdmin, generateToken } = require("../utils.js");
const Order = require('../model/orderModel');

const orderRouter = express.Router();


orderRouter.get('/', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});



orderRouter.post('/', isAuth, async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
        shippingAddress: req.body.shippingAddress,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id

    });

    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order });
});

orderRouter.delete('/:id', async (req, res) => {
    try {
        //find the item by its id and delete it
        const deleteItem = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
    } catch (err) {
        res.json(err);
    }
});


orderRouter.get('/mine', isAuth, async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
});

orderRouter.get(
    '/:id',
    isAuth,
    async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.send(order);
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    });


orderRouter.get(
    '/summary',
    isAuth,
    isAdmin,
    async (req, res) => {    
        const orders = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    numOrders: { $sum: 1 },
                    totalSales: { $sum: '$totalPrice' },
                },
            },
        ]);
        res.send({ orders });
    });

module.exports = orderRouter;


