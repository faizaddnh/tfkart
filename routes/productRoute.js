const express = require('express');
const Product = require('../model/productModel');
const { isAuth, isAdmin, generateToken } = require("../utils.js");


const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  try {
    const data = await Product.find({});
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

productRouter.get('/mine', isAuth, isAdmin, async (req, res) => {
  const data = await Product.find({ user: req.user._id });
  res.send(data);
});

productRouter.get('/:id', async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

productRouter.get('/:category', async (req, res) => {
  try {
    const data = await Product.find(req.params.category);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

productRouter.post('/', isAuth, isAdmin, function (req, res) {
  try {
    var mod = new Product({
      name: req.body.name,
      brand: req.body.brand,
      image: req.body.image,
      images: req.body.images,
      price: req.body.price,
      discount: req.body.discount,
      description: req.body.description,
      countInStock: req.body.countInStock,
      category: req.body.category,
      user: req.user._id,
      returnPolicy: req.body.returnPolicy,
      colors: req.body.colors,
      sizeList: req.body.sizeList,
      pack: req.body.pack,
      style: req.body.style,
      weight: req.body.weight,
      length: req.body.length,
      ideal: req.body.ideal,
      sleeve: req.body.sleeve,
      type: req.body.type
    });
    try {
      mod.save();
      res.send({ data: 'PRODUCT ADDED' });
    } catch (err) {
      res.send(err);
    }
  } catch (err) {
    res.send(err);
  }
});



productRouter.post(
  '/:id/reviews',
  async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      const review = {
        name: req.body.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
        image: req.body.image,
      };
      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((a, c) => c.rating + a, 0) /
        product.reviews.length;
      const updatedProduct = await product.save();
      res.status(201).send({
        message: 'Review Created',
        review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
        numReviews: product.numReviews,
        rating: product.rating,
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name,
        product.brand = req.body.brand,
        product.image = req.body.image,
        product.images = req.body.images,
        product.price = req.body.price,
        product.discount = req.body.discount,
        product.description = req.body.description,
        product.countInStock = req.body.countInStock,
        product.category = req.body.category,
        product.user = req.user._id,
        product.returnPolicy = req.body.returnPolicy,
        product.colors = req.body.colors,
        product.sizeList = req.body.sizeList,
        product.pack = req.body.pack,
        product.style = req.body.style,
        product.weight = req.body.weight,
        product.length = req.body.length,
        product.ideal = req.body.ideal,
        product.sleeve = req.body.sleeve,
        product.type = req.body.type,
        await product.save();
      res.send({ message: 'Product Updated' });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });


productRouter.delete('/:id', async (req, res) => {
  try {
    //find the item by its id and delete it
    const deleteItem = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  } catch (err) {
    res.json(err);
  }
});

productRouter.get('/categories', async (req, res) => {
  const categories = await Product.find({ category: req.user.category });
  res.send(categories);
});




module.exports = productRouter;
