const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        orderItems: [
            {
                name: { type: String },
                price: { type: Number },
                quantity: { type: Number },
                image: { type: String },
                product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            }
        ],

        shippingAddress: {
            name: { type: String },
            mobile: { type: Number },
            address: { type: String },
            city: { type: String },
            district: { type: String },
            pincode: { type: Number },
        },

        itemsPrice: { type: Number, required: true },
        shippingPrice: { type: Number, required: true },
        taxPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        isPaid: { type: Boolean, default: false },
        paidAt: { type: Date },
        isDelivered: { type: Boolean, default: false },
        deliveredAt: { type: Date },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;