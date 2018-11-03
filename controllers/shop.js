//moved to model
//const products = [];
const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
	const products = Product.fetchAll(products => {
		res.render('shop/product-list', {
			prods: products,
			pageTitle: 'All Products',
			path: '/products'
		});
	});
};

exports.getCart = (req, res, next) => {
	/* ejs */
	res.render('shop/cart', {
		pageTitle: 'Your Cart',
		path: '/shop/cart',
		pageTitle: 'All Products'
	});
};

exports.getOrders = (req, res, next) => {
	/* ejs */
	res.render('shop/orders', {
		pageTitle: 'Your orders',
		path: '/shop/orders',
		pageTitle: 'Orders'
	});
};

exports.getIndex = (req, res, next) => {
	Product.fetchAll(products => {
		res.render('shop/index', {
			prods: products,
			pageTitle: 'Shop',
			path: '/'
		});
	});
};


exports.getCheckout = (req, res, next) => {
	res.render('shop/checkout', {
		pageTitle: 'Checkout',
		path: '/checkout'
	});
};


