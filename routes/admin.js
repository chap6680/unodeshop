const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const productsController = require('../controllers/products');

const router = express.Router();

//NOTE - THE ADMIN 'parent' folder is controlled on the app.js
// admin/add-product GET
router.get('/add-product',productsController.getAddProduct);

// admin/add-product Post
router.post('/add-product',productsController.postAddProduct); 


//module.exports = router;
exports.routes = router;
//exports.products = products;




