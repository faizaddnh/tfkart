const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bodyParser= require('body-parser');
const port = process.env.PORT || 7000;
const userRouter = require('./routes/userRoute');
const productRouter = require('./routes/productRoute');
const orderRouter = require('./routes/orderRoute');
const uploadRouter = require('./routes/uploadRoutes');

dotenv.config();
const app = express();


app.use(cors())
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    try {
        console.log('DataBase connected');
    } catch (err) {
        console.log(err.message);
    }
});


//app.use(express.static(path.join(__dirname, "./client/build")));
//app.get("*", function (_, res) {
  //res.sendFile(
    //path.join(__dirname, "./client/build/index.html"),
    //function (err) {
      //res.status(500).send(err);
    //}
  //);
//});


app.use(express.static("./client/build"));
app.get("*", (req,res)=>{
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});







app.listen(port, ()=>{
    console.log('server running on port 7000')
});