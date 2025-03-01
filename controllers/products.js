exports.get404 = (res,res, next)=>{
    res.status(404).render('404', {pageTitle:'Page Not Found'})
}

const products = []

exports.getAddProduct = (req,res, next)=>{
    res.render('add-product',{
        pageTitle:'Add product',
        formsCSS:true,
        productCss:true,
        activeAddProduct:true
    }

    )
}
exports.postAddProduct = (req,res, next)=> {
    products.push({title:req.body.title})
    res.redirect('./')
}
exports.getProducts = (req, res, next)=>{
    products.push({title:req.body.title})
    res.redirect
}