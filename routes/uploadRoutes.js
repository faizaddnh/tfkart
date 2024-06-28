const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

//import { v2 as cloudinary } from 'cloudinary';

//import { isAdmin, isAuth } from '../utils.js';

const upload = multer();

const uploadRouter = express.Router();

uploadRouter.post(
  '/',
  upload.single('file'),
  async (req, res) => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: "image",
            folder: "gulf-kart",
          }, (error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          });
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };
    const result = await streamUpload(req);
    res.send(result);
  }
);
module.exports = uploadRouter;
