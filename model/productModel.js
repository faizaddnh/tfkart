const mongoose = require('mongoose');

const schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema(
    {
        name: { type: String },
        comment: { type: String },
        image: { type: String },
        rating: { type: Number },
    },
    {
        timestamps: true,
    }
);


const productSchema = new schema(
    {
        name: { type: String },
        category: { type: String },
        brand: { type: String },
        description: { type: String },
        price: { type: Number },
        image: { type: String },
        countInStock: { type: Number },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        returnPolicy: { type: String },
        color: { type: String },
        size: { type: String },
        pack: { type: String },
        style: { type: String },
        weight: { type: String },
        length: { type: String },
        ideal: { type: String },
        sleeve: { type: String },
        type: { type: String },
        rating: { type: Number },
        numReviews: { type: Number },
        reviews: [reviewSchema],
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;