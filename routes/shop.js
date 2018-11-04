const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const shopController = require('../controllers/shop');


//router.get('/', productsController.getProducts);


router.post('/cart', shopController.postCart);

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);



router.get('/products/:productId', shopController.getProduct);


router.get('/cart', shopController.getCart);


router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);


module.exports = router;