const express = require('express')
const app = express()



// app.use ((req,res, next) =>{
//     console.log(`request URL: ${req.url}`)
//     next()
// })

//Router handler 
app.get ('/', (req, res)=>{
res.send('hello world')})

app.use('/api',(req, res, next)=>{
     console.log('api middleware')
    next();// pass control to the next middleware or route handler
})  // valid path values for mounting middelware
app.use('/api(c?)d', (req, res, next)=>{
    console.log('checked')
    next()})// path pattern
    
    app.use ('/\/api |\/xyz/', (req, res, next)=>{
        next()
    })// regular expression


app.use(['/abcd','xyza', /\/lmn | \/pqr/], (req,res, next)=>{
  console.log('multiple path')
    next()
})

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})


//*********Middle callback fuction example */
const router = express.Router()
router.get('/', (req, res, next)=>{
    next()
})

app.use(router)