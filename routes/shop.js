const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => { 
	//res.send('<h1>Hi David</h1>');

	/* console.log(adminData.products);
	res.sendFile(path.join(rootDir,'views','shop.html')); */
	const products = adminData.products;
	
	/*Pug file
	res.render('shop', { prods: products, docTitle: 'Shop' });
	*/
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/',
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	  });

});

module.exports = router;