const express = require('express');

const Order = require('../model/orderModel');

const orderRouter = express.Router();


orderRouter.get('/', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});



orderRouter.post('/', async (req, res) => {
    const newOrder = new Order({
        orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
        shippingAddress: req.body.shippingAddress,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        taxPrice: req.body.taxPrice,
        totalPrice: req.body.totalPrice,

    });

    const order = await newOrder.save();
    res.status(201).send({ message: 'New Order Created', order });
});

orderRouter.delete('/:id', async (req, res) => {
    try{
        //find the item by its id and delete it
        const deleteItem = await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Deleted');
      }catch(err){
        res.json(err);
      }
});

module.exports = orderRouter;