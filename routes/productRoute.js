const express = require('express');
const Product = require('../model/productModel')


const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
    try {
        const data = await Product.find({});
        res.send(data);
    } catch (err) {
        res.send(err);
    }
});

productRouter.get('/:id', async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
});

productRouter.post('/', function (req, res) {
    try {
        var mod = new Product(req.body);
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

    productRouter.delete('/:id', async (req, res) => {
      try{
          //find the item by its id and delete it
          const deleteItem = await Product.findByIdAndDelete(req.params.id);
          res.status(200).json('Item Deleted');
        }catch(err){
          res.json(err);
        }
  });

  


module.exports = productRouter;
