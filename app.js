// const http = require('http')
const bodyParser = require('body-parser');
const express= require('express')

const app = express();


const adminRoute = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))
// const ht= require('./ht.js')


app.use('/admin', adminRoute)
app.use(shopRoutes)

app.use ((req, res, next)=>{
    res.send(
       res.status(404).send('<h1> Page not found </h1>')
    )
})
app.listen(3000) 
