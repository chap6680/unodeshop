const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const adminController = require('../controllers/admin');

const router = express.Router();

//NOTE - to get here the url must be proceded with admin. 
//THE ADMIN 'parent' folder is controlled on the app.js
// admin/add-product GET
router.get('/add-product',adminController.getAddProduct);

// admin/add-product Post
router.post('/add-product',adminController.postAddProduct); 

router.get('/edit-product/:productId', adminController.getEditProduct);

// admin/add-product Post
router.get('/products',adminController.getProducts); 


//module.exports = router;
exports.routes = router;
//exports.products = products;




