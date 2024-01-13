const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());
const dotenv = require('dotenv');
const authController = require('./controllers/authController');
const ProductController = require('./controllers/ProductController');
const uploadController = require('./controllers/uploadController');
dotenv.config();
const MONGODB_URI = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ggx5kyv.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/auth', authController);
    app.use('/product', ProductController);
    app.use('/upload', uploadController);
    app.use('/images',express.static('public/images'))

    app.listen(PORT, () => console.log('Server is running on port ' + PORT));
  })
  .catch((err) => console.log(err));