//moved to model
//const products = [];
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {

	/* ejs */
	res.render('admin/edit-product', {
		pageTitle: 'Add Product',
		path: '/admin/add-product',
		editing: false,
	});
};


exports.postAddProduct = (req, res, next) => {
	//moved to model
	//products.push({ title: req.body.title });
	const title = req.body.title;
	const imageUrl = req.body.imageUrl;
	const description = req.body.description;
	const price = req.body.price;
	
	const product = new Product(title, imageUrl, description, price);
	product.save();
	return res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
	const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};


exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

