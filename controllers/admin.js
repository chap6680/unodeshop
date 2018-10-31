//moved to model
//const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {

	/* ejs */
	res.render('admin/add-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
};


exports.postAddProduct = (req, res, next) => {
	//moved to model
	//products.push({ title: req.body.title });
	const product = new Product(req.body.title);
	product.save();
	res.redirect('/');
};

exports.getProducts = (req, res, next) => {
	res.render('admin/products', {
		pageTitle: 'Products',
		path: '/admin/products',
		formsCSS: true,
		productCSS: true,
		activeAddProduct: true
	});
};

