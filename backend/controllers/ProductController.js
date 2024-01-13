const ProductController = require('express').Router();
const Product = require('../models/Product');
const { verifyToken, verifyTokenAdmin } = require('../middlewears/verifyTOken'); // Fix the typo here

ProductController.get('/', verifyToken, async (req, res) => { // Correct the middleware function name
  try {
    const products = await Product.find(req.query);
    return res.status(200).json(products);
  } catch (error) {
    console.error(error);
  }
})

ProductController.get('/find/:id', verifyToken, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
  }
});

ProductController.post('/',   verifyTokenAdmin, async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
  }
});

module.exports = ProductController;
