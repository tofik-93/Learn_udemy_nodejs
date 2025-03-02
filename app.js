const bodyParser = require('body-parser');
const express = require('express');
const path= require('path');
const app = express();
const errorController = require('./controllers/error')
app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(_dirname,'public')))
// Use routes
app.use('/admin', adminRoute);
app.use(shopRoutes);

// 404 error handling middleware
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
});
app,use(errorController.get404)
// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
