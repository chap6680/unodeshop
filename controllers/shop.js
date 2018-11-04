//moved to model
//const products = [];
const Product = require('../models/product');
const Cart = require('../models/cart')


exports.getProducts = (req, res, next) => {
	Product.fetchAll(products => {
		res.render('shop/product-list', {
		  prods: products,
		  pageTitle: 'All Products',
		  path: '/products'
		});
	  });
	};


exports.getProduct = (req, res, next) => {
	const prodId = req.params.productId;
	Product.findById(prodId, product => {
	  res.render('shop/product-detail', {
		product: product,
		pageTitle: product.title,
		path: '/products'
	  });
	});
  };

  exports.postCart = (req, res, next) => {
	console.log('hello');
	const prodId = req.body.productId;
	Product.findById(prodId, (product)=>{
		Cart.addProduct(prodId, product.price);
	});
	res.redirect('/cart');
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


