const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

//NOTE - THE ADMIN 'parent' folder is controlled on the app.js
// admin/add-product GET
router.get('/add-product',(req, res, next)=> { 

	/* original - using html here 
	res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); */

	/* using html file with  __dirname	
	res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
	*/
	
	/*using html file
	res.sendFile(path.join(rootDir,'views','add-product.html'));
	*/

	/*pug
	res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
	*/
	/* ejs */
	res.render('add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	  });
});

// admin/add-product Post
router.post('/add-product', (req, res, next) => {
	products.push({ title: req.body.title });
	//console.log(req.body);
	res.redirect('/');
}); 


//module.exports = router;
exports.routes = router;
exports.products = products;




