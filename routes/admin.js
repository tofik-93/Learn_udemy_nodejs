const express = require('express');
const router = express.Router();
const rootDir = require("../util/path")

// Define routes
router.get('/add-product', (req, res, next) => {
    res.render('add-product',{
        pageTitle:'Add Product',
        path:'/admin/add-prooduct',
        formsCSS:true,
        productCSS:true,
        activeAddproduct:true
    })
res.sendFile(path.join(rootDir,'views','add-product.html'))
});

router.post('/add-product', (req, res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;


 















