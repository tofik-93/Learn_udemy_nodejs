const  path = require('path')

const express = require('express');

const productsController = require('../control')

const router = express.Router();

// Define routes (example)
router.get('/', (req, res,next) => {
res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))}
);

module.exports = router; 

