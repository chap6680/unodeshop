const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

//reserved express "variables"
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');


//default location is views - so dont really need this but here to show incase it is in a different location
app.set('views', 'views');

//const adminRoutes = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));

//needed for public files such as CSS files
app.use(express.static(path.join(__dirname,'public')));

//by adding admin here, the routes in adminRoutes must be proceeded by admin in the url
//app.use('/admin',adminRoutes);
app.use('/admin',adminRoutes.routes);
app.use(shopRoutes);


app.use(errorController.get404Page);


app.listen(3000);

/* MOved to routes
app.use('/',(req, res, next)=> { 
	console.log('Express users here');
	//this next allows the following items to be
	//tested - if no next - stops here.
	next();
});


app.use('/add-product',(req, res, next)=> { 
	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
	
});

app.post('/product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
}); 
 */

/* app.use('/product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
}); 

app.use((req, res, next)=> { 
	console.log('in the midde part II');
	res.send('<h1>Hello</h1>');
});


*/

/* 
const server = http.createServer(app);

server.listen(3000);
 */

