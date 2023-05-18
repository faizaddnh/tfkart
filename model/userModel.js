const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String},
    email:{type:String, unique: true},
    password:{type: String},
    isAdmin: { type: Boolean, default: false },
    image:{type: String},
},
{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;